const global = {
  wrapper: "",
  outer: "pt-2 pb-2",
  prefix: "border bg-ruby-700 w-10 b-10",
  label:
    "inline-block pb-1 text-14 text-denim-400 font-medium formkit-invalid:text-ruby-700",
  messages: "pt-1",
  message: "text-14 text-denim-400 font-medium formkit-invalid:text-ruby-700",
  inner: "text-16",
  input:
    "text-16 focus:placeholder-denim-900 focus:ring focus:ring-velvet-600 focus:ring-offset-2 focus:ring-offset-denim-900 placeholder-denim-700 bg-offwhite-100 border border-transparent dark:border-denim-400 border-denim-400 focus:border-velvet-600 formkit-invalid:placeholder-ruby-700 formkit-invalid:ring-ruby-700 formkit-invalid:border-ruby-700",
  help: "text-14 text-denim-400 formkit-invalid:hidden pt-1",
};

const formInput = {
  input:
    "py-[11px] pl-3 block w-full rounded-lg border text-denim-800 formkit-disabled:bg-denim-400 formkit-disabled:cursor-not-allowed",
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
