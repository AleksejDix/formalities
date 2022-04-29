const global = {
  wrapper: "",
  outer: "pt-2 pb-2",
  prefix: "border bg-ruby-700 w-10 b-10",
  label:
    "inline-block pb-1 text-14 text-denim-400 font-medium formkit-invalid:text-ruby-700",
  messages: "pt-1",
  message: "text-14 text-denim-400 font-medium formkit-invalid:text-ruby-700",
  inner: "",
  input:
    "text-16 focus:placeholder-denim-900 focus:ring focus:ring-velvet-600 focus:ring-offset-2 focus:ring-offset-denim-900 placeholder-denim-700 bg-offwhite-100 dark:border-denim-400 border-denim-400 focus:border-velvet-600 formkit-invalid:placeholder-ruby-700 formkit-invalid:ring-ruby-700 formkit-invalid:border-ruby-700",
  help: "text-14 text-denim-400 pt-1",
};

const formInput = {
  input:
    "border border-transparent py-[11px] pl-3 block w-full rounded-lg  text-denim-800 formkit-disabled:bg-denim-400 formkit-disabled:cursor-not-allowed",
};

const otp = {
  inner: "flex space-x-4",
  digit:
    "inline-block border border-transparent py-[11px] pl-3 block w-full rounded-lg text-denim-800 formkit-disabled:bg-denim-400 formkit-disabled:cursor-not-allowed focus:ring focus:ring-velvet-600 focus:ring-offset-2 focus:ring-offset-denim-900 focus:border-velvet-600 formkit-invalid:placeholder-ruby-700 formkit-invalid:ring-ruby-700 formkit-invalid:border-ruby-700 formkit-invalid:focus:border-ruby-700",
};

const button = {
  input:
    "inline-block font-medium text-offwhite-100 rounded-lg text-16 py-[11px] px-3 bg-velvet-600 border-ruby-600 formkit-disabled:bg-denim-400 formkit-disabled:text-700",
};

const radio = {
  legend: "bg-ruby-700",
  wrapper: "flex items-center space-x-4",
  label: "block w-full flex-1 text-offwhite text-16 pt-2",
};

const checkbox = {
  legend: "bg-ruby-700",
  wrapper: "flex items-center space-x-4",
  label: "block w-full flex-1 text-offwhite text-16 pt-2",
};

const textarea = {
  input:
    "border border-transparent py-[11px] pl-3 block w-full rounded-lg  text-denim-800 formkit-disabled:bg-denim-400 formkit-disabled:cursor-not-allowed",
};

export default {
  global,
  radio,
  checkbox,
  textarea,
  text: formInput,
  number: formInput,
  email: formInput,
  url: formInput,
  password: formInput,
  date: formInput,
  "datetime-local": formInput,
  month: formInput,
  search: formInput,
  tel: formInput,
  time: formInput,
  week: formInput,
  hidden: formInput,
  select: formInput,
  button,
  submit: button,
  otp,
};
