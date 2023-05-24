import Header from "@/components/Header.jsx"
import Footer from "@/components/Footer.jsx"
import { tw } from "twind"
import { DENO_ENV } from "@/utils/config.js"
import { Head } from "$fresh/runtime.ts"

import { animation, apply, css, keyframes, theme } from "twind/css"

// ${animation("300ms ease-in-out 1", fadeIn)}

const SchemaORG = () => {
  const Schema = {
    "@context": "https://schema.org",
    "@type": "Store",
    "name": "Seaside Pharmacy",
    "description": "For your Pharmacy, Lottery and Everyday needs",
    "openingHours": [
      "Mo-Fr 09:00-19:00",
      "Sa 09:00-17:00",
    ],
    "telephone": "+17812846525",
    "department": {
      "@type": "Pharmacy",
      "name": "Seaside Pharmacy",
      "description": "The on duty pharmacist is here to care for the community",
      "openingHours": [
        "Mo-Fr 09:00-19:00",
        "Sa 09:00-17:00",
      ],
      "telephone": "+17812846525",
    },
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(Schema, null, 2) }}
    >
    </script>
  )
}

export const fadeIn = keyframes({
  "0%": {
    opacity: 0,
  },
  "100%": {
    opacity: 1,
  },
})

export const globalStyles = css({
  ":global": {
    ".fadein": apply(animation("600ms ease-out 1", fadeIn)),
    a: {
      "&": apply`underline`,
      color: theme("colors.indigo"),
      "&:visited": apply`text-violet`,
      "&:hover": apply`text-blue underline`,
      "&:active": apply`text-pink`,
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
    body: {
      backgroundColor: theme("colors.blue"),
    },
    ".logo-gradient":
      apply`bg-clip-text text-transparent bg-gradient-to-b from-indigo via-blue via-blue to-morepink`,
  },
})

const Layout = ({ children, data = {} }) => (
  <>
    <Head>
      <SchemaORG />
    </Head>
    <div class={tw`${globalStyles}`}></div>
    <section class={tw`flex justify-center header-wrapper`}>
      <Header active={data.route} />
    </section>
    {children}
    <section class={tw`flex justify-center`}>
      <Footer hits={data?.data?.hits} />
    </section>
    {DENO_ENV === "development"
      ? (
        <section class="max-w-screen-md mx-auto py-8 px(8) space-y-4 bg-white">
          <pre>{JSON.stringify(data, null, 2 )}</pre>
        </section>
      )
      : <></>}
  </>
)

export default Layout
