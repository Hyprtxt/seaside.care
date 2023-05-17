import BrandGithub from "$icons/brand-github.tsx"

export default function Footer({ children, active, hits = 0 }) {
  const menus = [
    {
      title: "Pages",
      children: [
        { name: "Home", href: "/" },
        // { name: "Menu", href: "/menu" },
        // { name: "Order", href: "/order" },
      ],
    },
    {
      title: "Community",
      children: [
        {
          name: "Facebook",
          href:
            "https://www.facebook.com/people/Seaside-Pharmacy/100070179091084",
        },
        {
          name: "Yelp",
          href: "https://www.yelp.com/biz/seaside-pharmacy-revere",
        },
      ],
    },
  ]

  return (
    <div class="bg-white flex flex-col md:flex-row w-full max-w-screen-lg gap-8 md:gap-16 px-8 py-8 text-sm mb-5">
      <div class="flex-1">
        <div
          class="flex items-center gap-1"
          vocab="https://schema.org/"
          typeof="Restaurant"
        >
          <div
            class="font-bold text-2xl"
            property="name"
          >
            Seaside Pharmacy
          </div>
        </div>
        <div>
          <a href="https://goo.gl/maps/ZuBSQdKqEavcKrgf9">
            Location & Directions
          </a>
        </div>
        <div property="telephone">
          <a href="tel:+17812846525">(781) 284-6525</a>
          {" "}
        </div>
      </div>

      {menus.map((item) => (
        <div class="mb-4" key={item.title}>
          <div class="font-bold">{item.title}</div>
          <ul class="mt-2">
            {item.children.map((child) => (
              <li class="mt-2" key={child.name}>
                <a
                  href={child.href}
                  class={child.href === active ? " font-bold" : ""}
                >
                  {child.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div class="space-y-2">
        <div class="text-xs">
          Copyright © Seaside Pharmacy<br />
          {/* <a href="https://hyprtxt.dev">Coded in Arizona</a>. */}
        </div>
        <a
          href="https://github.com/Hyprtxt/seaside.care"
          class="inline-block hover:text-black"
          aria-label="Github Icon"
        >
          <BrandGithub />
        </a>
      </div>
      {children}
    </div>
  )
}
