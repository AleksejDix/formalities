const global = {
  wrapper: '',
  outer: 'pt-2 pb-2',
  prefix: 'border bg-ruby-700 w-10 b-10',
  label: 'inline-block pb-1 text-14 font-medium',
  messages: 'pt-1',
  message: 'text-14 text-denim-400 font-medium formkit-invalid:text-ruby-700',
  input: 'text-16 placeholder-denim-700 formkit-invalid:placeholder-ruby-700',
  help: 'text-14 text-denim-400 pt-1',
  legend: 'text-16 dark:text-offwhite-100 font-medium'
};

const formInput = {
  label:
    'text-denim-900 dark:text-denim-400 dark:formkit-invalid:text-ruby-700 formkit-invalid:text-ruby-700',
  input:
    'border border-transparent border-denim-600 dark:border-denim-400 hover:border-velvet-600 focus:border-velvet-600 focus:ring-2 focus:ring-offset-2 focus:dark:ring-offset-denim-900 focus:ring-velvet-600 py-3 pl-3 block w-full rounded-lg text-denim-900 formkit-disabled:bg-denim-400 formkit-invalid:ring-ruby-700 formkit-invalid:border-ruby-700 formkit-disabled:cursor-not-allowed bg-offwhite-100'
};

const button = {
  input:
    'border flex transform text-center font-medium transition ease-in dark:text-offwhite-100 rounded-lg focus:outline-2 focus:outline-offset-2 focus:outline active:scale-90 active:transition active:ease-out formkit-disabled:cursor-not-allowed formkit-disabled:border-denim-400 formkit-disabled:!bg-denim-400 formkit-disabled:text-denim-500 formkit-disabled:hover:!border-denim-400 formkit-disabled:dark:border-denim-400 items-center space-x-2',
  primary:
    'border-velvet-600 bg-velvet-600 text-offwhite-100 outline-velvet-600 hover:border-velvet-800 hover:bg-velvet-800 focus:bg-velvet-800',
  secondary:
    'border-denim-900 bg-offwhite-100 text-denim-900 outline-velvet-900 dark:border-offwhite-100 dark:bg-denim-800 dark:text-offwhite-100 hover:border-velvet-800 hover:bg-velvet-800 hover:text-offwhite-100 dark:hover:text-velvet-600 dark:hover:text-offwhite-100 focus:bg-velvet-800 focus:text-offwhite-100',
  critical:
    'border-ruby-700 bg-ruby-700 text-offwhite-100 outline-ruby-900 hover:border-ruby-900 hover:bg-ruby-900 focus:bg-ruby-900',
  base: 'py-3 px-6 text-16',
  large: 'py-3 px-6 text-20',
  icon: 'py-3 px-3 text-16'
};

const checkbox = {
  wrapper: 'flex items-center space-x-4',
  label: 'dark:text-offwhite-100 block w-full flex-1 text-16 pt-1',
  input:
    'form-checkbox rounded cursor-pointer h-6 w-6 dark:bg-denim-800 bg-offwhite-100 border dark:border-offwhite-100 border-denim-900 focus:ring-offset-2 focus:ring-offset-offwhite-100 focus:dark:ring-offset-denim-900 focus:bg-offwhite-100 focus:dark:border-offwhite-100 focus:dark:bg-denim-800 focus:ring-velvet-800 focus:dark:ring-velvet-800 checked:dark:bg-velvet-600 checked:bg-velvet-600 checked:dark:border-offwhite-100 checked:border-velvet-800 checked:focus:bg-velvet-600 checked:focus:border-offwhite-100 checked:hover:dark:border-offwhite-100 checked:hover:bg-velvet-600 checked:hover:border-velvet-800 checked:focus:dark:bg-velvet-600 dark:formkit-invalid:border-ruby-700 dark:formkit-invalid:ring-ruby-700 formkit-invalid:ring-ruby-700 formkit-invalid:border-ruby-700 formkit-disabled:bg-denim-400 dark:formkit-disabled:bg-denim-400 formkit-disabled:cursor-not-allowed dark:formkit-disabled:cursor-not-allowed formkit-disabled:border-denim-500 dark:formkit-disabled:border-denim-500 '
};

const radio = {
  wrapper: 'flex items-center space-x-4',
  label: 'dark:text-offwhite-100 block w-full flex-1 text-16 pt-1',
  input:
    'rounded-full cursor-pointer h-6 w-6 dark:bg-denim-800 bg-offwhite-100 border dark:border-offwhite-100 border-denim-900 focus:ring-offset-2 focus:ring-offset-offwhite-100 focus:dark:ring-offset-denim-900 focus:bg-offwhite-100 focus:dark:border-offwhite-100 focus:dark:bg-denim-800 focus:ring-velvet-800 focus:dark:ring-velvet-800 checked:dark:bg-velvet-600 checked:bg-velvet-600 checked:dark:border-velvet-600 checked:border-velvet-600 checked:focus:bg-velvet-600 checked:focus:border-velvet-600 checked:hover:dark:border-offwhite-100 checked:hover:bg-velvet-600 checked:hover:border-velvet-600 checked:focus:dark:bg-velvet-600 dark:formkit-invalid:border-ruby-700 dark:formkit-invalid:ring-ruby-700  formkit-invalid:ring-ruby-700 formkit-invalid:border-ruby-700 formkit-disabled:bg-denim-400 dark:formkit-disabled:bg-denim-400 formkit-disabled:cursor-not-allowed dark:formkit-disabled:cursor-not-allowed formkit-disabled:border-denim-500 dark:formkit-disabled:border-denim-500'
};

const toggle = {
  outer: 'flex h-6 w-12 cursor-pointer items-center rounded-full py-1 duration-300 ease-in-out',
  decorator:
    'cursor-pointer flex items-center justify-center mx-0.5 h-5 w-5 shadow transform rounded-full bg-offwhite-100 duration-300 ease-in-out peer-focus:outline peer-focus:outline-2 peer-focus:outline-offset-4 peer-focus:outline-velvet-600',
  wrapper: 'flex items-center space-x-4',
  label: 'dark:text-offwhite-100 block text-16 pt-1',
  input: 'sr-only peer',
  inner:
    'flex h-6 w-12 p-0.5 cursor-pointer items-center rounded-full py-1 duration-300 ease-in-out',
  checked: 'bg-velvet-600',
  unchecked: 'bg-denim-400'
};

const pill = {
  wrapper:
    'relative inline-flex h-12 items-center justify-center transition duration-200',
  decorator:
    'absolute inset-0 whitespace-nowrap rounded-full bg-offwhite-100 ring-1 ring-denim-900 transition duration-200 dark:bg-denim-800 dark:ring-white dark:formkit-invalid:border-ruby-700 dark:formkit-invalid:ring-ruby-700 formkit-invalid:ring-ruby-700 formkit-invalid:border-ruby-700 peer-focus:outline peer-focus:outline-2 peer-focus:outline-offset-4 peer-focus:outline-velvet-600 peer-active:scale-90 peer-active:transition peer-active:duration-200 peer-active:ease-out peer-checked:border-offwhite-100 peer-checked:bg-velvet-600 peer-checked:ring-velvet-600 peer-disabled:cursor-not-allowed peer-disabled:border-denim-400 peer-disabled:!bg-denim-400 peer-disabled:text-denim-500 peer-disabled:hover:!border-denim-400 peer-disabled:dark:border-denim-400',
  input: 'sr-only z-30 peer',
  label:
    'z-10 cursor-pointer dark:formkit-invalid:text-offwhite-100 formkit-invalid:text-denim-900 px-4 py-3 pb-3 peer-checked:dark:text-offwhite-100 peer-checked:text-offwhite-100 dark:text-offwhite-100 block w-full flex-1 text-16'
};

const range = {
  label:
    'text-denim-900 dark:text-denim-400 dark:formkit-invalid:text-ruby-700 formkit-invalid:text-ruby-700 pb-2',
  input: 'form-range range-slider'
};

const counter = {
  wrapper: 'flex items-center justify-between',
  label: 'hidden',
  customLabel:
    'inline-block pb-1 pr-6 text-16 text-denim-900 dark:text-denim-400 font-medium formkit-invalid:text-ruby-700',
  customHelp: 'text-14 dark:text-denim-600 pt-1',
  input: 'dark:text-offwhite-100 w-14',
  counterButton: [button.input, button.icon, button.secondary].join(' ')
};

const autocomplete = {
  input:
    'border border-denim-600 bg-offwhite-100 dark:border-denim-400 hover:border-velvet-600 focus:border-velvet-600 focus:ring-2 focus:ring-offset-2 focus:dark:ring-offset-denim-900 focus:ring-velvet-600 py-3 pl-8 block w-full rounded-lg text-denim-900 formkit-disabled:bg-denim-400 formkit-invalid:ring-ruby-700 formkit-invalid:border-ruby-700 formkit-disabled:cursor-not-allowed mb-1',
  help: 'hidden',
  label: 'hidden',
  customLabel:
    'inline-block pb-1 text-14 text-denim-900 dark:text-denim-400 font-medium dark:formkit-invalid:text-ruby-700 formkit-invalid:text-ruby-700',
  item: 'bg-offwhite-100 dark:bg-offwhite-100 p-3 text-denim-700 text-16 font-normal',
  activeItem: 'text-velvet-600',
  options: 'absolute w-full z-20 border-1 border-denim-400 rounded-lg max-h-52 overflow-y-scroll'
};

export default {
  global,
  radio: radio,
  checkbox: checkbox,
  toggle: toggle,
  pill: pill,
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
  range: range,
  button,
  submit: button,
  counter: counter,
  autocomplete: autocomplete
};
