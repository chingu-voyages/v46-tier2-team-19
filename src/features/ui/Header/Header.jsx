import { menuIcon, close } from "@/assets";
import { navLinks, name } from "@/constants";

import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between h-16 px-4 bg-[#FEF8E6] shadow-sm shrink-0 gap-x-4 sm:gap-x-6 sm:px-6 lg:px-8">
      <Link to="/">
        <aside>
          <p className="text-[#C7522B] font-semibold">{name}</p>
        </aside>
      </Link>
      <nav>
        <div className="hidden space-x-4 lg:block">
          {navLinks.map((navLink, index) => (
            <Link key={index} to={navLink.href}>
              {navLink.title}
            </Link>
          ))}
        </div>
        <div className="block lg:hidden">
          <Menu>
            <Menu.Button className="-m-1.5 flex items-center p-1.5">
              <img
                src={toggle ? close : menuIcon}
                alt="menu"
                className="h-[18px] w-[18px] cursor-pointer object-contain text-[#6DD1E3]"
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
              <Menu.Items className="absolute z-20 w-32 py-2 mt-5 origin-top-right bg-[#FEF8E6] rounded-md shadow-lg right-1 ring-1 ring-gray-900/5 focus:outline-none">
                <div className="flex flex-col">
                  {navLinks.map((navLink) => (
                    <Menu.Item key={navLink.href} as={Fragment}>
                      {({ active }) => (
                        <Link
                          to={navLink.href}
                          className={`${
                            active
                              ? "bg-blue-500 text-white"
                              : "bg-white text-black"
                          }`}
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
