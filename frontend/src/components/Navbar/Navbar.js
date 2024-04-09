/** @format */

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

function NavbarDefault() {
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem("user_id");
    sessionStorage.removeItem("provider_id");
    navigate("/");
  };
  const [openNav, setOpenNav] = React.useState(false);
  const isLoggedIn =
    !!sessionStorage.getItem("user_id") ||
    !!sessionStorage.getItem("provider_id");
  const isUserLoggedIn = !!sessionStorage.getItem("user_id");
  const isProviderLoggedIn = !!sessionStorage.getItem("provider_id");
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {isLoggedIn ? (
        <>
          {isUserLoggedIn ? (
            <>
              <Link to="/home" className="flex items-center">
                Home
              </Link>
              <Link to="/services" className="flex items-center">
                Explore
              </Link>
              <Link to="/user/history/:user_id" className="flex items-center">
                History
              </Link>

              <Link to="/user/profile/:id" className="flex items-center">
                Profile
              </Link>
            </>
          ) : (
            <>
              <Link to="/home" className="flex items-center">
                Home
              </Link>
              <Link to="/services" className="flex items-center">
                Explore
              </Link>
              <Link to="/provider/services/:id" className="flex items-center">
                My Services
              </Link>
              <Link to="/" className="flex items-center">
                Customers
              </Link>
              <Link to="/provider/profile/:id" className="flex items-center">
                Profile
              </Link>
            </>
          )}
        </>
      ) : (
        <Link to="/services" className="flex items-center">
          Check out available services.
        </Link>
      )}
    </ul>
  );

  return (
    <Navbar className="mx-auto max-w-screen px-4 lg:px-24 py-4 text-black font-poppin">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          Chakde Chores
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex items-center gap-x-1">
          {isLoggedIn ? (
            <Button
              variant="text"
              size="sm"
              className="hidden lg:inline-block"
              onClick={handleLogout}
            >
              <Link to="/">
                <span>Log Out</span>
              </Link>
            </Button>
          ) : (
            <>
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block"
              >
                <Link to="/auth/user">
                  <span>Log In</span>
                </Link>
              </Button>
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block"
              >
                <Link to="/auth/provider">
                  <span>Join In</span>
                </Link>
              </Button>
            </>
          )}
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
            {isLoggedIn ? (
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block"
              >
                <Link to="/login">
                  <span>Log Out</span>
                </Link>
              </Button>
            ) : (
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block"
              >
                <Link to="/login">
                  <span>Log In</span>
                </Link>
              </Button>
            )}
            <Button fullWidth variant="text" size="sm" className="">
              <span>Sign in</span>
            </Button>
          </div>
        </div>
      </MobileNav>
    </Navbar>
  );
}

export default NavbarDefault;
