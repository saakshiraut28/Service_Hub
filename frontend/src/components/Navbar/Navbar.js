/** @format */

import React from "react";
import {
  Navbar,
  MobileNav,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

function DefaultNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 font-poppin text-md">
      <Link href="#" className="flex items-center">
        About
      </Link>

      <Link href="#" className="flex items-center">
        Services
      </Link>

      <Link href="#" className="flex items-center">
        Trending
      </Link>

      <Link href="#" className="flex items-center">
        Contact Us
      </Link>
    </ul>
  );

  return (
    <Navbar className="mx-auto w-screen px-4 py-2 lg:px-8 lg:py-4 sticky top-0">
      <div className="container mx-auto flex items-center justify-between text-gray-900 font-poppin text-md">
        Logo
        <div className="hidden lg:block">{navList}</div>
        <div className="flex items-center gap-x-1">
          <Button variant="text" size="sm" className="hidden lg:inline-block">
            <span>Log In</span>
          </Button>
          <Button
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block"
          >
            <span>Sign in</span>
          </Button>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Sign in</span>
            </Button>
          </div>
        </div>
      </MobileNav>
    </Navbar>
  );
}

export default DefaultNavbar;