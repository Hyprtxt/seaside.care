import { Head } from "$fresh/runtime.ts";
import { tw } from "twind";
import { animation, apply, css, keyframes, theme } from "twind/css";

// ${animation("300ms ease-in-out 1", fadeIn)}

export const fadeIn = keyframes({
  "0%": {
    opacity: 0,
  },
  "100%": {
    opacity: 1,
  },
});

export const globalStyles = css({
  ":global": {
    ".fadein": apply(animation("600ms ease-out 1", fadeIn)),
    a: {
      "&": apply`underline`,
      color: theme("colors.indigo"),
      "&:visited": apply`text-violet`,
      "&:hover": apply`text-blue underline`,
      "&:active": apply`text-green`,
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
      apply`bg-clip-text text-transparent bg-gradient-to-b from-indigo via-blue to-violet`,
  },
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Seaside Pharmacy</title>
      </Head>
      <div class={tw`${globalStyles}`}></div>
      <div class="p-8 mx-auto text-center max-w-sm my-5 bg-white border-indigo border-4">
        <h2
          class="font-lora uppercase font-bold relative mb-2"
          style="font-size: 4.15rem; line-height: 0.7;"
        >
          <span class="logo-gradient">Seaside</span>
          <span class="text-5xl inline-block logo-gradient">
            Pharmacy
          </span>
        </h2>
        <a href="tel:781-284-6525">781-284-6525</a>
        <p>Located in Revere, Massachusetts</p>
        <a href="https://goo.gl/maps/ZuBSQdKqEavcKrgf9?coh=178571&entry=tt">
          Click here to visit us on Google Maps
        </a>
      </div>
    </>
  );
}
