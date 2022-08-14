export default (name) => {
  return import(`../public/data/${name}.json`)
}
