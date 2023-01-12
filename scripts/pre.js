// Generate /public/${lang}/articles/${year}/${month}/${date}/${title}.json

import yaml from 'js-yaml'
import fs from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'
import markdownIt from 'markdown-it'
import lunr from 'lunr'
import lunrStemmer from 'lunr-languages/lunr.stemmer.support.js'
import lunrZh from 'lunr-languages/lunr.zh.js'

lunrStemmer(lunr)
lunrZh(lunr)

if (existsSync('./public/zh-CN')) {
  await fs.rm('./public/zh-CN', { recursive: true })
}
if (existsSync('./public/en-US')) {
  await fs.rm('./public/en-US', { recursive: true })
}

async function copyRecursive (src, dest) {
  const stats = await fs.stat(src)
  const isDirectory = stats.isDirectory()
  if (isDirectory) {
    await fs.mkdir(dest, { recursive: true })
    ;(await fs.readdir(src)).forEach(async function (childItemName) {
      await copyRecursive(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      )
    })
  } else {
    await fs.copyFile(src, dest)
  }
}

console.log('Building articles...')

const documents = {
  'zh-CN': [],
  'en-US': []
}

// For every .md file in ./articles
for (const file of await fs.readdir('./articles')) {
  // if is .md
  if (file.endsWith('.md')) {
    // Read the file
    const content = await fs.readFile(`./articles/${file}`, 'utf-8')
    const id = file.split('.')[0]
    // Parse the file
    const parsed = markdownIt({
      html: true
    }).render(content.split('---')[2])
    // Parse yaml front matter
    const frontMatter = yaml.load(content.split('---')[1])
    const date = new Date(frontMatter.date)
    const json = {
      id,
      ...frontMatter,
      body: parsed
    }
    // Check out language
    const lang = file.endsWith('zh.md') ? 'zh-CN' : 'en-US'

    const datePath = `/${date.getFullYear()}/${
      date.getMonth() + 1
    }/${date.getDate()}/`

    // Add to documents
    documents[lang].push({
      id,
      href: `/${lang}/articles` + datePath + id,
      title: frontMatter.title,
      description: frontMatter.description,
      body: content.split('---')[2]
    })
    // Write the file
    const dir = `./public/${lang}/articles` + datePath

    await fs.mkdir(dir, { recursive: true })
    await fs.writeFile(dir + id + '.json', JSON.stringify(json))

    // Find its dependencies
    if ((await fs.stat(`./articles/${id}`)).isDirectory()) {
      // Copy it to both zh-CN and en-US
      await copyRecursive(`./articles/${id}`, dir + id)
    }
  }
}

console.log('Building search index...')

// Build lunr index using documents
for (const lang of ['zh-CN', 'en-US']) {
  const idx = lunr(function () {
    if (lang === 'zh-CN') {
      this.use(lunr.zh)
    }
    this.ref('id')
    this.field('title')
    this.field('description')
    this.field('body')
    // Href is not indexed but used for search result
    this.metadataWhitelist = ['position']
    documents[lang].forEach(function (doc) {
      this.add(doc)
    }, this)
  })
  await fs.writeFile(`./public/${lang}/search.json`, JSON.stringify(idx))

  const db = documents[lang].reduce((acc, cur) => {
    // Remove body
    cur.body = undefined
    acc[cur.id] = cur
    return acc
  }, {})
  await fs.writeFile(`./public/${lang}/db.json`, JSON.stringify(db))
}

console.log('Done, now welcome vite:')
