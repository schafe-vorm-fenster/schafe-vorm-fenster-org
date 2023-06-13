/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_layouts/**/*.html',
    './*.html',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#602bb6',
        'brand': '#b4cf39',
        'brand-light': '#c9e44e ',
        'primary-light': '#d6aff3',
        'black': '#111111',
      },
      fontFamily: {
        'sans': ["Exo2", 'sans-serif'],
        'mono': ["Inconsolata", 'monospace']
      },
      container: {
        center: true,
        padding: '0',


      },
      backgroundImage: {
        'hero': "url('/assets/img/projects-wireframe.png')",

      },
      plugins: [],
    }
  },
};