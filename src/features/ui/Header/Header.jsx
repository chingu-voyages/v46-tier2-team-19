import { colorLogo as Logo } from "@/assets";
import { Icon } from "@/features/ui";
import { navLinks, name } from "@/constants";

import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="top-0 flex items-center justify-between px-4 py-3 bg-white shadow-md shrink-0 gap-x-4 sm:gap-x-6 sm:px-6 lg:px-8 rounded-t-2xl">
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
            {({ open }) => (
              <>
                <Menu.Button className="-m-1.5 flex items-center p-1.5">
                  <Icon
                    className="text-5xl text-sky"
                    name={open ? "close" : "hamburger"}
                  />
                </Menu.Button>
                <Transition
                  as="fragment"
                  enter="transition duration-400 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  {open && (
                    <Menu.Items className="absolute z-10 mt-6 origin-top-right bg-sky-300 text-3xl rounded-bl-md overflow-hidden shadow-lg right-4 md:right-8 ring-1 ring-gray-900/5 focus:outline-none">
                      <div className="flex flex-col">
                        {navLinks.map((link) => (
                          <Menu.Item key={link.href} as={Fragment}>
                            {({ active }) => (
                              <Link
                                to={link.href}
                                className={`${
                                  active
                                    ? "bg-sky-400 text-white"
                                    : "bg-sky-300 text-white"
                                } font-bold uppercase px-10 py-3`}
                              >
                                {link.title}
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  )}
                </Transition>
              </>
            )}
          </Menu>
        </div>
      </nav>
    </header>
  );
};
