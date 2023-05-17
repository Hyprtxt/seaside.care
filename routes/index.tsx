import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Seaside Pharmacy</title>
      </Head>
      <div class="p-4 mx-auto text-center max-w-xs my-5">
        <h2
          class="font-lora uppercase relative mb-2"
          style="font-size: 4.15rem; line-height: 0.7;"
        >
          Seaside<span class="text-5xl inline-block">Pharmacy</span>
        </h2>
        <a href="tel:781-284-6525">781-284-6525</a>
        <p>Revere, MA</p>
        <a href="https://goo.gl/maps/ZuBSQdKqEavcKrgf9?coh=178571&entry=tt">
          Find us on Google Maps
        </a>
      </div>
    </>
  );
}
