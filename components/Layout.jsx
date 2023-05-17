import Header from "@/components/Header.jsx"
import Footer from "@/components/Footer.jsx"
import { tw } from "twind"
import { DENO_ENV } from "@/utils/config.js"
import { globalStyles } from "@/utils/style.js"
import { Head } from "$fresh/runtime.ts"

const SchemaORG = () => {
  const Schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Prescott Valley",
      "addressRegion": "AZ",
      "postalCode": "86314",
      "streetAddress": "7840 E. St, AZ-69",
    },
    "name": "Sushi J Express",
    "openingHours": [
      "Tu-Sa 11:00-14:30",
      "Tu-Sa 16:30-19:00",
    ],
    "priceRange": "$$",
    "servesCuisine": [
      "Sushi",
      "Japanese",
    ],
    "telephone": "(928) 775-9323",
    "url": "https://sushij.express/",
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(Schema, null, 2) }}
    >
    </script>
  )
}

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
        <section class="max-w-screen-lg mx-auto py-8 px(8) space-y-4 bg-white">
          <pre>{JSON.stringify(data, null, 2 )}</pre>
        </section>
      )
      : <></>}
  </>
)

export default Layout
