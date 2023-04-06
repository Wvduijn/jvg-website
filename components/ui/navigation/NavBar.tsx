// framework specific imports
import { useState } from 'react';
import { useRouter } from 'next/router';

// components
import Image from "next/image";
import NavBarLink from './NavBarLink';

// data
import menu from '../../../data/menu.json';

const NavBar = (props: any) => {
  const { menu_items } = menu;
  const router = useRouter();

  // State
  const [navHidden, setNavHidden] = useState(true);

  // navigation toggle
  const navToggle = () => {
    setNavHidden(!navHidden);
  };
  return (
    <nav className="relative bg-white shadow dark:bg-white">
      <div className="px-4 py-4 md:flex md:justify-between md:items-center flex-1">
        <div className="flex items-center justify-between">
          <div>
            <Image
              src="/images/JVG_logo.svg"
              alt="JVG De jeugd van gisteren"
              width={250}
              height={63}
              priority={true}
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </div>

          {/* <!-- Mobile menu button --> */}
          <div className="flex md:hidden">
            <button
              onClick={navToggle}
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              <svg
                x-show="!isOpen"
                xmlns="http://www.w3.org/2000/svg"
                className={`w-6 h-6 ${navHidden ? '' : 'hidden'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="purple"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 8h16M4 16h16"
                />
              </svg>

              <svg
                x-show="isOpen"
                xmlns="http://www.w3.org/2000/svg"
                className={`w-6 h-6 ${!navHidden ? '' : 'hidden'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="purple"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
        <div
          className={`absolute mt-4 inset-x-0 z-20 w-full px-6 py-4 bg-white dark:bg-gray-100 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${
            !navHidden
              ? 'translate-x-0 opacity-100 transition-all duration-300 ease-in-out'
              : 'opacity-0 -translate-x-full'
          } `}
        >
          <div className="flex flex-col md:flex-row md:mx-6 gap-4 md:gap-0">
            {menu_items.map((item) => {
              return (
                <NavBarLink
                  goto={item.link}
                  title={item.title}
                  active={router.pathname == item.link}
                  key={item.title}
                />
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
