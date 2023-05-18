import { Head } from "$fresh/runtime.ts"
// import { tw } from "twind"
import Layout from "@/components/Layout.jsx"

export default function Home() {
  return (
    <>
      <Head>
        <title>Seaside Pharmacy</title>
      </Head>
      <div class="p-8 mx-auto text-center max-w-sm my-5 bg-white border-indigo border-4">
        <h2
          class="font-lora font-bold uppercase relative mb-2"
          style="font-size: 4.15rem; line-height: 0.7;"
        >
          <span class="logo-gradient">Seaside</span>
          <span class="text-5xl inline-block logo-gradient">
            Pharmacy
          </span>
        </h2>
        <a href="tel:781-284-6525">781-284-6525</a>
        <p>Located in Revere, Massachusetts</p>
        <a href="https://goo.gl/maps/ZuBSQdKqEavcKrgf9">
          Click here to visit us on Google Maps
        </a>
      </div>
      <div class="hidden">
        <Layout>
          <section class="bg-white mx-auto max-w-screen-lg py-6 px-8 gap-4">
          </section>
        </Layout>
      </div>
    </>
  )
}
