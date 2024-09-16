/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ppurple: {
          DEFAULT: '#EBE0F0',
          dark: '#936FA3',
        },
        ggreen: {
          light: '#32AF7F',
          DEFAULT: '#EBF3E0',
          dark: '#388366',
        },
        oorange: {
          DEFAULT: '#F0DBD1',
          dark: '#FF8956',
        },
        rred: {
          DEFAULT: '#ECD5D5',
          dark: '#FF5656',
        },
        bblack: {
          light: '#403A42',
          DEFAULT: '#312D33',
          dark: '#000000',
        },
      },
      fontSize: {
        bbase: '1.75rem',
      },
      backgroundImage: {
        'custom-grad':
          'linear-gradient(135deg, #b2a4f7 0%, #c8a3d7 25%, #f4b7b7 50%, #efafa5 75%, #f4c9ac 100%)',
      },
      darkMode: 'class',
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'], // Add this line
      },
    },
  },
  plugins: [],
};
