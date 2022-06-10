module.exports = {
  darkMode: 'class',
  presets: [
    require('./node_modules/@ascarix/formalities/dist/tailwind.config.js')
  ],
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/@ascarix/formalities/dist/formalities.es.js'
  ]
}