const global = {
  wrapper: '',
  outer: 'pt-2 pb-2',
  prefix: 'border bg-ruby-700 w-10 b-10',
  label: 'inline-block pb-1 text-14 text-denim-400 font-medium formkit-invalid:text-ruby-700',
  messages: 'pt-1',
  message: 'text-14 text-denim-400 font-medium formkit-invalid:text-ruby-700',
  inner: '',
  input:
    'text-16 focus:placeholder-denim-900 placeholder-denim-700 dark:border-denim-400 border-denim-400 formkit-invalid:placeholder-ruby-700 formkit-invalid:ring-ruby-700 formkit-invalid:border-ruby-700',
  help: 'text-14 text-denim-400 pt-1',
  legend: 'text-16 text-denim-400 font-medium'
};

const formInput = {
  input:
    'border border-transparent hover:border-velvet-600 focus:border-velvet-600 focus:ring focus:ring-offset-2 focus:ring-offset-denim-900 focus:ring-velvet-600 py-[11px] pl-3 block w-full rounded-lg  text-denim-800 formkit-disabled:bg-denim-400 formkit-disabled:cursor-not-allowed'
};

const code = {
  inner: 'flex space-x-4',
  digit:
    'inline-block border border-transparent py-[11px] pl-3 block w-full rounded-lg text-denim-800 formkit-disabled:bg-denim-400 formkit-disabled:cursor-not-allowed focus:ring focus:ring-velvet-600 focus:ring-offset-2 focus:ring-offset-denim-900 focus:border-velvet-600 formkit-invalid:placeholder-ruby-700 formkit-invalid:ring-ruby-700 formkit-invalid:border-ruby-700 formkit-invalid:focus:border-ruby-700'
};

const button = {
  input:
    'global-button border inline-block transform text-center font-medium transition ease-in text-offwhite-100 rounded-lg focus:outline-2 focus:outline-offset-2 focus:outline active:scale-90 active:transition active:ease-out formkit-disabled:cursor-not-allowed formkit-disabled:border-denim-400 formkit-disabled:!bg-denim-400 formkit-disabled:text-denim-500 formkit-disabled:hover:!border-denim-400 formkit-disabled:dark:border-denim-400'
};

const radio = {
  wrapper: 'flex items-center space-x-4',
  label: 'block w-full flex-1 text-offwhite text-16 pt-2'
};

const checkbox = {
  wrapper: 'flex items-center space-x-4',
  label: 'block w-full flex-1 text-offwhite text-16 pt-2',
  input:
    'form-checkbox cursor-pointer rounded h-6 w-6 dark:bg-denim-800 border border-denim-900 dark:border-offwhite-100 focus:dark:ring-offset-offwhite-100 focus:dark:ring-offset-denim-900 focus:bg-offwhite-100 focus:dark:bg-denim-800 focus:bg-velvet-600 focus:ring-velvet-800 checked:bg-velvet-600 checked:border-offwhite-100 checked:focus:border-offwhite-100 checked:hover:border-offwhite-100 checked:hover:bg-velvet-600 checked:focus:bg-velvet-600 formkit-disabled:bg-denim-400 formkit-disabled:border-denim-500'
};

const passwordToggle = {
  inner: 'flex space-x-4',
  button: button.input
};

const counter = {
  inner: 'flex space-x-4',
  up: button.input,
  down: button.input
};

export default {
  global,
  radio,
  checkbox,
  textarea: formInput,
  text: formInput,
  number: formInput,
  email: formInput,
  url: formInput,
  password: formInput,
  date: formInput,
  'datetime-local': formInput,
  month: formInput,
  search: formInput,
  tel: formInput,
  time: formInput,
  week: formInput,
  hidden: formInput,
  select: formInput,
  button,
  submit: button,
  code,
  passwordToggle: { ...formInput, ...passwordToggle },
  counter: { ...formInput, ...counter }
};
