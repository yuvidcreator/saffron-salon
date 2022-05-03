module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        home: "url('/images/saffron-banner.webp')",
      }),
    },

    fontFamily: {
      body: ["Montserrat", "sans-serif"],
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
