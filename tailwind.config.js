/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mydark: "#1e1b18",
        myred: "#d8315b",
        mylight: "#fffaff",
        mylightblue: "#3e92cc",
        mydarkblue: "#0a2463",
        myyellow: "#facc15",
        primary: "#0048d0",
      }
    },
  },
  plugins: [],
}
