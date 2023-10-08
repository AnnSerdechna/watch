import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      color: {
        white: '#fff',
        black: '#21201E',
        accent: '#6100C2',
      },
      backgroundColor: {
        white: '#fff',
        black: '#21201E',
        accent: '#6100C2',
      },
      fontSize: {
        'xl': '1.4rem'
      },
      boxShadow: {
        '3xl': '2px 0px 90px 0px rgba(97, 0, 194, 0.40)'
      },
      width: {
        aside: '16rem'
      },
    },
  },
  plugins: [],
}
export default config
