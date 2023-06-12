/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.md',
    './*.html',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#602bb6',
        'brand': '#b4cf39',
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
      plugins: [
        require('@tailwindcss/typography'),
      ],
    }

  },
};