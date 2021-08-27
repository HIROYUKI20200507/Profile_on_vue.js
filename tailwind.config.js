// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
      fontFamily: {
        body: [
          '"Hiragino Kaku Gothic ProN"',
          '"ヒラギノ角ゴ ProN W3"',
          'YuGothic',
          '"Yu Gothic"',
          'sans-serif'
        ],
        top: [
          '"SignPainter"'
        ]
      }
    },
    variants: {
      extend: {},
    },
    plugins: [
    ],
}