import { colorLogo as Logo } from "@/assets";
import { Icon } from "@/features/ui";
import { navLinks, name } from "@/constants";

import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="top-0 z-40 flex items-center justify-between px-4 py-3 bg-white shadow-md shrink-0 gap-x-4 sm:gap-x-6 sm:px-6 lg:px-8 rounded-t-2xl">
      <aside className="w-40 lg:w-52">
        <Link to="/">
          <img src={Logo} alt={name} />
        </Link>
      </aside>
      <nav>
        <div className="hidden space-x-4 lg:flex gap-x-7 bg-sky-300 text-white rounded-full px-16 py-3">
          {navLinks.map((navLink, index) => (
            <Link
              key={index}
              to={navLink.href}
              className="font-bold uppercase hover:text-sky-600 duration-200"
            >
              {navLink.title}
            </Link>
          ))}
        </div>
        <div className="block lg:hidden">
          <Menu>
            <Menu.Button className="-m-1.5 flex items-center p-1.5">
              <Icon
                name={toggle ? "close" : "hamburger"}
                className="w-9 text-[#6DD1E3]"
                onClick={() => setToggle(!toggle)}
              />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute z-20 w-32 py-2 mt-5 origin-top-right bg-sky-300 rounded-md shadow-lg right-1 ring-1 ring-gray-900/5 focus:outline-none">
                <div className="flex flex-col">
                  {navLinks.map((navLink) => (
                    <Menu.Item key={navLink.href} as={Fragment}>
                      {({ active }) => (
                        <Link
                          to={navLink.href}
                          className={`${
                            active
                              ? "bg-sky-400 text-white"
                              : "bg-sky-300 text-white"
                          } font-bold uppercase px-4`}
                        >
                          {navLink.title}
                        </Link>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </nav>
    </header>
  );
};
