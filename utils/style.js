import { asset } from "$fresh/runtime.ts"
import { animation, apply, css, keyframes, theme } from "twind/css"

export const globalStyles = css({
  ":global": {
    a: {
      color: theme("colors.indigo"),
      "&:visited": apply`text-violet`,
      "&:hover": apply`text-blue underline`,
      "&:active": apply`text-red`,
    },
    "h1, h2, h3": {
      "&": apply`mb-3`,
      a: {
        "&": apply`text-dark`,
        "&:link": apply`text-dark`,
        "&:visited": apply`text-dark`,
        "&:hover": apply`text-dark no-underline`,
        "&:active": apply`text-dark`,
      },
    },
    ".no-top-margin": {
      marginTop: "0 !important",
    },
    h1: apply`text-4xl`,
    h2: apply`text-2xl`,
    h3: apply`text-xl`,
    ".markdown": {
      "a": apply`underline`,
      "ul, ol": {
        "li": apply`ml-5`,
        "&": apply`mb-3`,
      },
      "ul.mb-0": apply`mb-0`,
      "ul li": apply`list-disc`,
      "ol li": apply`list-decimal`,
    },
    "div > p": apply`mb-3`,
    body: {
      "&::before": {
        "&": apply`d-block fixed w-full h-full -z-20 left-0 top-0`,
        content: `""`,
        background: `url(${asset("/background.webp")}) no-repeat center center`,
        backgroundSize: "cover",
      },
      backgroundColor: theme("colors.blue"),
    },
    ".header-wrapper": apply`mt-5`,
  },
})

export const homeStyles = css({
  ":global": {
    ".landing-page":
      apply`fixed top-0 bg-transparent w-full text-white text-center min-h-screen -z-10`,
    "section.header-wrapper": {
      marginTop: "74vh",
    },
  },
})
