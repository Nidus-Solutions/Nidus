/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    letterSpacing: {
      'tight': '-0.015em',
      'normal': '0',
      'wide': '0.015em',
      'wider': '0.05em',
      'widest': '0.1em',
    },
    extend: {
      height: {
        'half-screen': '50vh',

      }
    },
  },
  plugins: [],
}

