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
  input: 'border flex transform text-center font-medium transition ease-in dark:text-offwhite-100 rounded-lg focus:outline-2 focus:outline-offset-2 focus:outline active:scale-90 active:transition active:ease-out formkit-disabled:cursor-not-allowed formkit-disabled:border-denim-400 formkit-disabled:!bg-denim-400 formkit-disabled:text-denim-500 formkit-disabled:hover:!border-denim-400 formkit-disabled:dark:border-denim-400 items-center space-x-2',
  primary:
    'border-velvet-600 bg-velvet-600 text-offwhite-100 outline-velvet-600 hover:border-velvet-800 hover:bg-velvet-800 focus:bg-velvet-800',
  secondary:
    'border-denim-900 bg-offwhite-100 text-denim-900 outline-velvet-900 dark:border-offwhite-100 dark:bg-denim-800 dark:text-offwhite-100 hover:border-velvet-800 hover:bg-velvet-800 hover:text-offwhite-100 dark:hover:text-velvet-600 dark:hover:text-offwhite-100 focus:bg-velvet-800 focus:text-offwhite-100',
  critical:
    'border-ruby-700 bg-ruby-700 text-offwhite-100 outline-ruby-900 hover:border-ruby-900 hover:bg-ruby-900 focus:bg-ruby-900',
  base: 'py-3 px-6 text-16',
  large: 'py-3 px-6 text-20'
};

const optionsInput = {
  wrapper: 'global-options-wrapper',
  label: 'global-options-label dark:text-offwhite-100 block w-full flex-1 text-16 pt-1',
  input: 'global-options-input',
  inner: 'global-options-inner',
  decorator: 'global-options-decorator'
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
  input: 'dark:text-offwhite-100 w-14'
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
  radio: optionsInput,
  checkbox: optionsInput,
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
