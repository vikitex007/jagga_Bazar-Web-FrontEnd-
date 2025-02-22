/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    // require('@tailwindcss/line-clamp'),
    // ...
  ],
};

// tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       colors: {
//         customSlate: 'rgb(35, 50, 60)', // Custom background color
//       },
//       boxShadow: {
//         customShadow: '0 4px 6px rgba(35, 50, 60, 0.1)', // Shadow color based on the RGBA value
//       },
//     },
//   },
//   plugins: [],
// }
