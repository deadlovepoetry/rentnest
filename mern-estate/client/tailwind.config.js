// @type {import('tailwindcss').Config}
import lineClamp from '@tailwindcss/line-clamp';
import autoprefixer from 'autoprefixer';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    lineClamp,
    // other plugins...
    //tailwindcss,
    autoprefixer,
  ],
};
