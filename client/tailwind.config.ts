import type { Config } from 'tailwindcss'

const colors = {
  white: '#fff',
  black: '#21201E',
  accent: '#6100C2',
  grey: '#969696',
}

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/ui/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      color: {...colors},
      backgroundColor: {
        white: '#fff',
        black: '#21201E',
        accent: '#6100C2',
      },
      borderColor: {...colors},
      backgroundImage: {
        'btn-gradient': 'linear-gradient(99deg, #FFF 3.36%, rgba(255, 255, 255, 0.00) 238.16%)',
        'card-gradient': 'linear-gradient(100deg, #FFF 12.94%, rgba(255, 255, 255, 0.00) 159.1%)',
      },
      fontSize: {
        'xl': '1.4rem'
      },
      boxShadow: {
        'md': 'rgba(97, 0, 194, 0.1) 0px 1px 3px 0px, rgba(97, 0, 194, 0.06) 0px 1px 2px 0px;',
        '3xl': '2px 0px 90px 0px rgba(97, 0, 194, 0.40)',
      },
      width: {
        aside: '21rem'
      },
    },
  },
  plugins: [],
}
export default config
