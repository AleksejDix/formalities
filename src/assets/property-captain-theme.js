const global = {
  outer: "mb-5 border rounded",
  label: "text-14 mb-1 text-denim-400 font-medium formkit-invalid:text-ruby-700",
  message: "text-14 text-denim-400 font-medium formkit-invalid:text-ruby-700",
  inner: "text-16",
  input: "placeholder-denim-700 placeholder-font-regular formkit-invalid:placeholder-ruby-700"
};

const text = {
  outer: "mb-5",
  label: "block font-bold text-sm",
  inner:
    "max-w-md border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500",
  input:
    "w-full py-3 pl-3 border-none  bg-offwhite-100",
  messages: "list-none p-0 mt-1 mb-0",
};

const otp = {
  digit: "px-2 border border-gray-400 w-8 mr-2 text-center",
};

const button = {};

export default {
  global,
  text,
  button,
  otp,
};
