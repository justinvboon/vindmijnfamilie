import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sand: '#f7f3ef',
        clay: '#d9c4b1',
        pine: '#1f4f4a',
        pineLight: '#2d6a64',
        ink: '#22313f',
        rose: '#f3e8e2',
      },
      boxShadow: {
        card: '0 10px 35px rgba(34, 49, 63, 0.08)',
      },
    },
  },
  plugins: [],
};

export default config;
