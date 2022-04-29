const global = {
  outer: "mb-5 border rounded",
  label: "text-14 mb-1 text-denim-400 font-medium formkit-invalid:text-ruby-700",
  message: "text-14 text-denim-400 font-medium formkit-invalid:text-ruby-700",
  inner: "text-16",
  input: "placeholder-denim-700 formkit-invalid:placeholder-ruby-700"
};

const text = {
  outer: "mb-5",
  label: "block font-bold text-sm",
  inner:
    "rounded-lg p-0.5 border-2 border-transparent focus-within:border-velvet-600",
  input:
    "py-3 pl-3 block w-full rounded-lg border bg-offwhite-100 text-denim-800 focus:border focus:border-velvet-600 focus:ring-0 focus:outline-none formkit-disabled:bg-denim-400",
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
