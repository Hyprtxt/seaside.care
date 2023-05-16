import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <h2>Seaside Pharmacy</h2>
        <a>781-284-6525</a>
        <p>Revere, MA</p>
      </div>
    </>
  );
}
