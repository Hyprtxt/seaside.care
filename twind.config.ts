import { Options } from "$fresh/plugins/twind.ts"
import * as colors from "twind/colors"

export default {
  selfURL: import.meta.url,
  preflight: {
    "@import":
      `url("https://fonts.googleapis.com/css2?family=Dosis:wght@400;700&family=Lora:wght@400;700&display=swap")`,
    "@font-face": [
      {
        fontFamily: "Lora",
      },
      {
        fontFamily: "Dosis",
      },
    ],
  },
  theme: {
    extend: {
      transitionDuration: {
        "0": "0ms",
        "1600": "1600ms",
        "2000": "2000ms",
      },
    },
    fontFamily: {
      "lora": ['"Lora"', "serif"],
      "dosis": ['"Dosis"', "sans-serif"],
      "sans": ['"Dosis"', "sans-serif"],
    },
    colors: {
      blue: "#61C4D9",
      morepink: "#F1A7C8",
      pink: "#E9D4E0",
      indigo: "rgb(0,153,212)",
      violet: "rgb(108, 73, 136)",
      grey: colors.coolGray,
      dark: "rgb(15,15,15)",
      transparent: "rgba(0,0,0,0)",
      white: colors.white,
      // black: colors.black,
    },
  },
} as Options
