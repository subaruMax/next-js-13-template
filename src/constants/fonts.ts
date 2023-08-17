import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: '400',
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap'
});

const FONTS = [roboto.className];

export default FONTS;
