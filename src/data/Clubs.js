import homeBg1 from '../assets/images/homeBg1.jpg?webp'

import imgFrenchLogo from '../assets/images/StudentLife/Clubs/French/French.svg'
import imgFrench1 from '../assets/images/StudentLife/Clubs/French/1.jpeg?webp'
import imgFrench2 from '../assets/images/StudentLife/Clubs/French/2.png?webp'

import imgSLSD1 from '../assets/images/StudentLife/Clubs/SLSD/1.jpeg?webp'
import imgSLSD2 from '../assets/images/StudentLife/Clubs/SLSD/2.jpeg?webp'
import imgSLSD3 from '../assets/images/StudentLife/Clubs/SLSD/3.jpeg?webp'
import imgSLSD4 from '../assets/images/StudentLife/Clubs/SLSD/4.jpeg?webp'

import imgXHXC from '../assets/images/StudentLife/Clubs/XHXC/XHXC.png?webp'

import imgNS from '../assets/images/StudentLife/Clubs/NS/NS.png?webp'

import imgLY from '../assets/images/StudentLife/Clubs/LY/LY.png?webp'

const frenchImgs = [imgFrench1, imgFrench2]
const SLSDImgs = [imgSLSD1, imgSLSD2, imgSLSD3, imgSLSD4]

export const clubs = [
  {
    logo: imgFrenchLogo,
    bgColor: 'rgba(255,251,243,1)',
    color: 'rgba(18,42,43,1)',
    name: 'StudentLife.Clubs.Club1.Name',
    description: 'StudentLife.Clubs.Club1.Description',
    images: frenchImgs
  },
  {
    logo: homeBg1,
    bgColor: 'var(--standard-blue)',
    color: 'white',
    name: 'StudentLife.Clubs.Club2.Name',
    description: 'StudentLife.Clubs.Club2.Description',
    images: SLSDImgs
  },
  {
    logo: homeBg1,
    bgColor: 'rgba(255, 195, 0, 1)',
    color: 'white',
    name: 'StudentLife.Clubs.Club3.Name',
    description: 'StudentLife.Clubs.Club3.Description',
    images: frenchImgs
  },
  {
    logo: imgXHXC,
    bgColor: 'var(--standard-red)',
    color: 'white',
    name: 'StudentLife.Clubs.Club4.Name',
    description: 'StudentLife.Clubs.Club4.Description',
    images: frenchImgs
  },
  {
    logo: imgNS,
    bgColor: 'rgba(255, 195, 0, 1)',
    color: 'white',
    name: 'StudentLife.Clubs.Club5.Name',
    description: 'StudentLife.Clubs.Club5.Description',
    images: frenchImgs
  },
  {
    logo: imgLY,
    bgColor: 'rgba(255,251,243,1)',
    color: 'rgba(18,42,43,1)',
    name: 'StudentLife.Clubs.Club6.Name',
    description: 'StudentLife.Clubs.Club6.Description',
    images: frenchImgs
  }
]
