// @type {import('tailwindcss').Config}
import lineClamp from '@tailwindcss/line-clamp';
import autoprefixer from 'autoprefixer';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        customBlue: '#1995ad',
      },
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'display': ['Oswald'],
        'body': ['"Open Sans"'],
      }
  
    },
  },
  plugins: [
    lineClamp,
    // other plugins...
   // tailwindcss,
    autoprefixer,
  ],
};
