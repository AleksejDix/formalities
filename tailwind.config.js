const FormKitPlugin = require("@formkit/tailwindcss").default;
const TailwindForms = require("@tailwindcss/forms");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "2rem",
      },
    },
    colors: {
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      offwhite: {
        100: "#F9F9FF",
      },
      denim: {
        900: "#161627",
        800: "#2A3151",
        700: "#474780",
        600: "#8C8CC0",
        500: "#A8A8CF",
        400: "#C4C4DE",
      },
      velvet: {
        900: "#2F1E6B",
        800: "#472EA3",
        600: "#6B50CE",
      },
      ruby: {
        900: "#6B0017",
        700: "#DB0030",
      },
      frog: {
        900: "#106043",
        800: "#1EB37C",
      },
      sun: {
        900: "#62460E",
        800: "#DCA638",
      },
      background: {
        900: "#35003E",
        800: "#54005B",
      },
      object: {
        start: "#2F1F6C",
        end: "#6D52CE",
        fill: "#3A3B79",
      },
      surroundings: {
        start: "#A8A8CF",
        end: "#ECECF4",
        fill: "#5D627C",
      },
      financing: {
        start: "#B51297",
        end: "#EF5DD4",
        fill: "#5F3774",
      },
      badge: {
        start: "#DB62CB",
        end: "#6C50C3",
        fill: "#9F2A99",
      },
      landingPage: {
        start: "#AC89ED30",
        end: "#FB3F3640",
      },
      hover: "#38416B",
      transparent: "transparent",
    },
    lineHeight: {},
    fontSize: {
      12: ["12px", "14px"],
      14: ["14px", "16px"],
      16: ["16px", "24px"],
      18: ["18px", "24px"],
      20: ["20px", "32px"],
      24: ["24px", "32px"],
      32: ["32px", "36px"],
      36: ["36px", "48px"],
      48: ["48px", "64px"],
      60: ["60px", "72px"],
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    shadows: {
      default: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
      none: "none",
    },
    // https://en.wikipedia.org/wiki/Display_resolution#/media/File:Vector_Video_Standards8.svg
    extend: {
      minHeight: {
        4: "1rem",
        6: "1.5rem",
        10: "2.5rem",
        70: "70vh",
      },
      minWidth: {
        40: "10rem",
        60: "15rem",
        xxs: "320px",
        xs: "480px",
        sm: "640px",
        md: "800px",
      },
      animation: {
        clockwise: "clockwise 2s linear infinite",
        anticlockwise: "anticlockwise 2s linear infinite",
        bokeh: "bokeh 60s linear infinite alternate both",
      },
      keyframes: {
        clockwise: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        anticlockwise: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
        bokeh: {
          "50%": { transform: "translate3d(0, 0, 0) rotate(2deg)" },
        },
      },
      maxHeight: {
        "half-screen": "50vh",
      },
      zIndex: {
        1: "1",
        2: "2",
        5: "5",
        "-1": -1,
      },
      width: {
        50: "50rem",
      },
      borderRadius: {
        sm: "0.15rem",
      },
      inset: {
        18: "4.3rem",
      },

      // tailwind darkmode for prose plugin
      // https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js
      typography: (theme) => ({
        default: {
          css: {
            a: {
              color: theme("colors.ruby.700"),
              "&:hover": {
                color: theme("colors.ruby.700"),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [TailwindForms, FormKitPlugin],
};
