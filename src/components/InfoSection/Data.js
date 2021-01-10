import svg1 from '../../assets/images/svg1.svg';
import svg2 from '../../assets/images/svg2.svg';
import svg3 from '../../assets/images/svg3.svg';
import svg4 from '../../assets/images/svg4.svg';
import svg5 from '../../assets/images/svg5.svg';
import svg6 from '../../assets/images/svg6.svg';
import svg7 from '../../assets/images/svg7.svg';
import svg8 from '../../assets/images/svg8.svg';

export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Smart Energy Management',
  headline: 'Platform manajemen energi untuk pelaku UKM dan UMKM',
  description: 'Pelaku UMKM mendapat sebuah produk yang dapat meminitor penggunaan energi sehingga lebih efisien, yang berakibat pada pengurangan biaya produksi dan mengurangi emisi gas karbon.',
  buttonLabel: 'Selengkapnya',
  imgStart: false,
  img: svg5,
  alt: '',
  dark: true,
  primary: true,
  darkText: false
}

export const homeObjTwo = {
  id: 'discover',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Cloud Computing Based',
  headline: 'Sistem terintegrasi dengan server',
  description: `Dengan selalu terhubung ke server, data penggunaan energi dapat dimonitor dimana saja dan kapan saja.`,
  buttonLabel: 'Selengkapnya',
  imgStart: true,
  img: svg4,
  alt: '',
  dark: false,
  primary: false,
  darkText: true
}

export const homeObjThree = {
  id: 'signup',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Be our partner',
  headline: 'Ayo, gabung sekarang!',
  description: 'Dengan memajukan UMK dan UMKM, kita turut memajukan perekonomian Indonesia.',
  buttonLabel: 'Sign Up',
  imgStart: false,
  img: svg8,
  alt: '',
  dark: false,
  primary: false,
  darkText: true
}