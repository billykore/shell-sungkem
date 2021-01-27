import png1 from '../../assets/images/png1.png';
import png2 from '../../assets/images/png2.png';

const lightBg = true;

export const Data = {
  lightBg: lightBg,
  lightText: lightBg ? false : true,
  lightTextDesc: lightBg ? false : true,
  topLine: 'Page Not Found',
  headline: 'Oops!',
  description: `The page you are looking for doesn't exist or an other error occurred.`,
  buttonLabel: 'Home',
  imgStart: false,
  img: png2,
  alt: '404',
  dark: lightBg ? false : true,
  primary: false,
  darkText: lightBg ? true : false
}