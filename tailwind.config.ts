// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Only include if using src/ directory
  ],
  theme: {
    extend: {
      // Your custom theme extensions here
      colors: {
         black:{
          DEFAULT: '#000'
         }
      }
    },
  },
  plugins: [
    // Add other Tailwind plugins here (without daisyui)
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
};

export default config;