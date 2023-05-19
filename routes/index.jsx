import { Head } from "$fresh/runtime.ts"
// import { tw } from "twind"
import Layout from "@/components/Layout.jsx"
import IconPill from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/pill.tsx"

export default function Home() {
  return (
    <>
      <Head>
        <title>Seaside Pharmacy</title>
      </Head>

      <div class="mx-auto text-center max-w-sm my-5 bg-white border-blue border-dashed border-4">
        <div class="border-4 border-pink">
          <div class="border-4 border-pink border-dotted">
            <div class="border-4 border-pink p-8">
              <h2
                class="font-lora font-bold uppercase relative mb-4"
                style="font-size: 4.15rem; line-height: 0.7;"
              >
                <span class="logo-gradient">Seaside</span>
                <span class="text-5xl inline-block logo-gradient">
                  Pharmacy
                </span>
              </h2>
              <div class="mb-3">
                <IconPill class="text-pink inline rotate-135" />
                <IconPill class="text-blue inline rotate-90" />
                <IconPill class="text-pink inline rotate-135" />
                <IconPill class="text-blue inline rotate-90" />
                <IconPill class="text-pink inline rotate-135" />
                <IconPill class="text-blue inline rotate-90" />
                <IconPill class="text-pink inline rotate-135" />
                <IconPill class="text-blue inline rotate-90" />
                <IconPill class="text-pink inline rotate-135" />
                <IconPill class="text-blue inline rotate-90" />
                <IconPill class="text-pink inline rotate-135" />
                <IconPill class="text-blue inline rotate-90" />
              </div>
              <a class="text-xl" href="tel:781-284-6525">
                781-284-6525
              </a>

              <table class="mx-auto my-4 text-left text-dark">
                <tbody class="hours-table">
                  <tr class="">
                    <th class="pr-3" scope="col">
                      <p class="">
                        Mon
                      </p>
                    </th>
                    <td class="">
                      9:00 AM - 7:00 PM
                    </td>
                  </tr>
                  <tr class="">
                    <th class="pr-3" scope="col">
                      <p class="">
                        Tue
                      </p>
                    </th>
                    <td class="">
                      9:00 AM - 7:00 PM
                    </td>
                  </tr>
                  <tr class="">
                    <th class="pr-3" scope="col">
                      <p class="">
                        Wed
                      </p>
                    </th>
                    <td class="">
                      9:00 AM - 7:00 PM
                    </td>
                  </tr>
                  <tr class="">
                    <th class="pr-3" scope="col">
                      <p class="">
                        Thu
                      </p>
                    </th>
                    <td class="">
                      9:00 AM - 7:00 PM
                    </td>
                  </tr>
                  <tr class="">
                    <th class="pr-3" scope="col">
                      <p class="">
                        Fri
                      </p>
                    </th>
                    <td class="">
                      9:00 AM - 7:00 PM
                    </td>
                  </tr>
                  <tr class="">
                    <th class="pr-3" scope="col">
                      <p class="">
                        Sat
                      </p>
                    </th>
                    <td class="">
                      9:00 AM - 5:00 PM
                    </td>
                  </tr>
                  <tr class="">
                    <th class="pr-3" scope="col">
                      <p class="">
                        Sun
                      </p>
                    </th>
                    <td class="">
                      Closed
                    </td>
                  </tr>
                </tbody>
              </table>

              <p>
                <a href="https://goo.gl/maps/ZuBSQdKqEavcKrgf9">
                  Click here to visit us on Google Maps
                </a>
              </p>
              <p>Located in Revere, Massachusetts</p>
            </div>
            <div class="hidden">
              <Layout>
                <section class="bg-white mx-auto max-w-screen-lg py-6 px-8 gap-4">
                </section>
              </Layout>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
