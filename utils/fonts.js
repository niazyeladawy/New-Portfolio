// utils/fonts.js (optional, to organize fonts in one place)
import { Poppins } from 'next/font/google';

export const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
    display: 'swap', // Optimize rendering
});
