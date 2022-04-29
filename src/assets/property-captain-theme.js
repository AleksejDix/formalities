const global = {
  outer: "mb-5",
  label: "text-14 ml-1 mb-1 text-denim-400 font-medium formkit-invalid:text-ruby-700",
  message: "ml-1 text-14 text-denim-400 font-medium formkit-invalid:text-ruby-700",
  inner: "text-16",
  input: "placeholder-denim-700 bg-offwhite-100 border dark:border-denim-400 border-denim-900 formkit-invalid:placeholder-ruby-700"
};

const formInput = {
  inner:
    "rounded-lg p-0.5 border-2 border-transparent focus-within:border-velvet-600",
  input:
    "py-3 pl-3 block w-full rounded-lg border text-denim-800 focus:border focus:border-velvet-600 focus:ring-0 focus:outline-none formkit-disabled:bg-denim-400",
};

const otp = {
  digit: "px-2 border border-gray-400 w-8 mr-2 text-center",
};

const button = {};

export default {
  global,
  text: formInput,
  number: formInput,
  email: formInput,
  url: formInput,
  password: formInput,
  date: formInput,
  datetimeLocal: formInput,
  month: formInput,
  search: formInput,
  tel: formInput,
  time: formInput,
  week: formInput,
  hidden: formInput,
  button,
  otp,
};
