# Vue 3 + Typescript + Vite + Formalities

How to create and configure:

## Initialize vite + TS + tailwind project:

- npm init vite test-app
- cd test-app
- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init -p

## Configure formalities

In tailwind config:

- add preset to formalities tailwind config: './node_modules/@ascarix/formalities/dist/tailwind.config.js'
- add js built file to content: './node_modules/@ascarix/formalities/dist/formalities.es.js'

In main.ts file:

- import install function and pass the app instance to it

## Usage

Use formkit components directly <FormKit type="yourType" attributes>Name<FormKit>
