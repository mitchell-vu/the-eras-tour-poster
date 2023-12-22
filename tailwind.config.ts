import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        pistilli: ['Pistilli-Roman', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        black: '#201C1B',
        'eras-taylor-swift': '#7C9569',
        'eras-fearless': '#E0AB5E',
        'eras-speak-now': '#B796B7',
        'eras-red': '#6A2433',
        'eras-1989': '#A0D0E0',
        'eras-reputation': '#6D6167',
        'eras-lover': '#E69BB9',
        'eras-folklore': '#B4B4AC',
        'eras-evermore': '#AE957B',
        'eras-midnight': '#1E1E37',
      },
    },
  },
  plugins: [],
} satisfies Config;
