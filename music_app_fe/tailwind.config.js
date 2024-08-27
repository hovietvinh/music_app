/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      lineClamp: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities(
        {
          '.line-clamp-1': {
            display: '-webkit-box',
            '-webkit-box-orient': 'vertical',
            '-webkit-line-clamp': '1',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          },
          '.line-clamp-2': {
            display: '-webkit-box',
            '-webkit-box-orient': 'vertical',
            '-webkit-line-clamp': '2',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          },
          '.line-clamp-3': {
            display: '-webkit-box',
            '-webkit-box-orient': 'vertical',
            '-webkit-line-clamp': '3',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          },
          '.line-clamp-4': {
            display: '-webkit-box',
            '-webkit-box-orient': 'vertical',
            '-webkit-line-clamp': '4',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          },
          '.line-clamp-5': {
            display: '-webkit-box',
            '-webkit-box-orient': 'vertical',
            '-webkit-line-clamp': '5',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          },
        },
        ['responsive']
      );
    },
  ],
}

