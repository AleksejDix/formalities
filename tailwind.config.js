const FormKitPlugin = require("@formkit/tailwindcss");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [FormKitPlugin],
};
