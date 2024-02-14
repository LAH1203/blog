import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        black: '#000000',
        'beige-100': '#e7e4e0',
        'beige-200': '#ddd6cf',
        'beige-300': '#c6bfb8',
        'beige-400': '#b4aba2',
        'beige-500': '#a09489',
        'beige-600': '#85776b',
        'beige-700': '#635950',
        'beige-700-op': '#635950ee',
      },
      backgroundImage: {
        'gradient-header-item': 'linear-gradient(transparent 65%, #c6bfb8 35%)',
      },
      backgroundSize: {
        'header-item-before': '0% 100%',
        'header-item-after': '100% 100%',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};

export default config;
