export default function Header({ active }) {
  const menus = [
    { name: "Home", href: "/" },
    // { name: "Menu", href: "/menu" },
    // { name: "Order", href: "/order" },
  ]

  return (
    <header class="bg-white w-full max-w-screen-md py-6 px-8 flex flex-col md:flex-row gap-4 mt-4">
      <div class="flex items-center flex-1">
        <div class="text-2xl  ml-1 font-bold">
          Seaside Pharmacy
        </div>
      </div>
      <ul class="flex items-center gap-6">
        {menus.map((menu) => (
          <li>
            <a
              href={menu.href}
              class={"text-gray-500 hover:text-gray-700 py-1 border-gray-500" +
                (menu.href === active ? " font-bold" : "")}
            >
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
    </header>
  )
}
