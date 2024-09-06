import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom/dist";

import profile from "./../../assets/projectLogo/deFaultProfile1.png";
import { useLocation } from "react-router-dom";
import logo from "../../assets/projectLogo/F.svg";
import OutsideClickHandler from "react-outside-click-handler";
import { SiReactrouter } from "react-icons/si";

import { IoMdArrowDropup } from "react-icons/io";
import { MdLogout } from "react-icons/md";

import toast from "react-hot-toast";
import useContextProvider from "../../useHooks/useContextProvider";
import { calculateScrollbarWidth } from "./Scrollbar";
import { BsBag } from "react-icons/bs";
import { RiLoginCircleLine } from "react-icons/ri";

export default function Nav() {
  const [scrollY, setScrollY] = useState(0);

  const { user, loading, logOut, theme, cartItem, menu, setMenu, setCartItem } =
    useContextProvider();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    logOut().then(() => {
      toast("See you soon!");
      setCartItem([])
    });
  };

  useEffect(() => {
    if (menu) {
      const scrollbarWidth = calculateScrollbarWidth();

      document.body.style.paddingRight = `${scrollbarWidth}px`;

      document.body.style.overflow = "hidden";
    } else {
      document.body.style.paddingRight = "0";

      document.body.style.overflow = "auto";
    }
  }, [menu]);

  const responsiveNavLinks = (
    <>
      <NavLink
        onClick={() => setMenu(false)}
        to="/"
        className={({ isActive }) =>
          isActive
            ? ` text-[#1E99F5] w-fit text-sm font-medium  `
            : `text-sm w-fit  font-medium hover:text-[#1E99F5] duration-300 `
        }
      >
        <p className="">Home</p>
      </NavLink>

      <NavLink
        onClick={() => setMenu(false)}
        to="/products"
        className={({ isActive }) =>
          isActive
            ? ` text-[#1E99F5] w-fit text-sm font-medium  `
            : `text-sm w-fit  font-medium hover:text-[#1E99F5] duration-300 `
        }
      >
        <p className="">Products</p>
      </NavLink>
      <button
        onClick={() => setMenu(false)}
        className="text-sm font-medium text-start"
      >
        <p className="">Categories</p>
      </button>
      <button
        onClick={() => setMenu(false)}
        className="text-sm font-medium text-start"
      >
        <p className="">Custom</p>
      </button>
      <button
        onClick={() => setMenu(false)}
        className="text-sm font-medium text-start"
      >
        <p className="">Blog</p>
      </button>
    </>
  );

  const navLinks = (
    <>
      <NavLink
        onClick={() => {
          setMenu(false);
        }}
        to="/"
        className={({ isActive }) =>
          isActive
            ? ` text-[#1E99F5] w-fit  text-sm font-medium  `
            : `text-sm w-fit  font-medium  hover:text-[#1E99F5] duration-300  `
        }
      >
        <p className="">Home</p>
      </NavLink>

      <NavLink
        onClick={() => {
          setMenu(false);
        }}
        to="/products"
        className={({ isActive }) =>
          isActive
            ? ` text-[#1E99F5] w-fit text-sm font-medium  `
            : `text-sm w-fit ${
                location.pathname === "/" && scrollY < 199 && "text-white"
              }  font-medium hover:text-[#1E99F5] duration-300 `
        }
      >
        <p className="">Products</p>
      </NavLink>
      <button className={`${location.pathname === '/' && scrollY < 199 && 'text-white'} text-sm font-medium`} >
        Categories
      </button>
      <button className={`${location.pathname === '/' && scrollY < 199 && 'text-white'} text-sm font-medium`} >
        Custom
      </button>
      <button className={`${location.pathname === '/' && scrollY < 199 && 'text-white'} text-sm font-medium`} >
        Blog
      </button>
     
    </>
  );

  

  return (
    <>
      <header className="relative  z-30 ">
        <div
          className={`navbar px-2 py-0  md:px-4 lg:8  ${
            scrollY < 199
              ? "top-[0.1px] bg-transparent shadow-sm"
              : scrollY > 199
              ? "   flex"
              : "hidden"
          } ${
            scrollY > 220
              ? `fixed ${
                  theme === "light" ? "bg-white" : "bg-[#2e3034]"
                } z-30 top-0 transition-all duration-500 flex shadow-sm `
              : "absolute -top-32 "
          }`}
        >
          <div className="navbar-start w-fit ">
            <div className="bg-[#1E99F5] w-fit inline-flex p-2 rounded-full">
              <img className="w-4 md:w-16 lg:w-12" src={logo} alt="" />
            </div>
            <a className=" ml-1 text-2xl font-bold  text-[#1E99F5] ">
              <span
                className={`font-bold ${
                  theme === "light"
                    ? location.pathname === "/"
                      ? scrollY < 199
                        ? "text-white"
                        : "text-[#4b5664]"
                      : "text-[#4b5664]"
                    : "text-white"
                }`}
              >
                Furni
              </span>
              <span className="text-2xl font-bold">Flex</span>
            </a>
          </div>

          <div className="menu  justify-center menu-horizontal px-1 py-0 h-16 md:gap-8 hidden  md:flex items-center w-full">
            {navLinks}
          </div>
          {/* <div className="navbar-end hidden lg:flex"></div> */}
          <div className="navbar-end flex-1  ">
            <Link
              to="/cart"
              className={` ${
                location.pathname === "/" && scrollY < 199
                  ? "text-white"
                  : "text-[#4b5664]"
              } font-medium hover:text-[#3F72AF] mr-4 relative   duration-300  text-xl `}
            >
              <BsBag />
              <p className=" absolute left-3 top-3 bg-black  w-3 h-3 flex items-center justify-center text-[8px] text-white  rounded-full ">
                <span> {cartItem?.length} </span>
              </p>
            </Link>
             {
              !user &&  <div className="tooltip hidden md:flex  tooltip-left" data-tip="Sign In" >
              <Link to='/login' >
              <button className="font-bold  flex items-end   text-2xl"  >
          <RiLoginCircleLine />
          </button>
              </Link>
            </div>
             }

            {/* responsive menu start */}
            <OutsideClickHandler onOutsideClick={() => setMenu(false)}>
              <div className="items-center flex   md:hidden">
                <label className=" swap swap-rotate  border-none  ">
                  {/* this hidden checkbox controls the state */}
                  <input
                    type="checkbox"
                    onChange={() => {
                      setMenu(!menu);
                    }}
                    checked={menu ? true : false}
                  />

                  {/* hamburger icon */}

                  <svg
                    className={`swap-off fill-current z-30 ${
                      theme === "light"
                        ? location.pathname === "/"
                          ? scrollY < 199
                            ? "text-white"
                            : "text-[#4b5664]"
                          : "text-[#4b5664]"
                        : "text-white"
                    }  `}
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 512 512"
                  >
                    <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                  </svg>

                  {/* close icon */}
                  <svg
                    className={`swap-on fill-current z-30 ${
                      theme === "light"
                        ? location.pathname === "/"
                          ? scrollY < 199
                            ? "text-white"
                            : "text-[#4b5664]"
                          : "text-[#4b5664]"
                        : "text-white"
                    } `}
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 512 512"
                  >
                    <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                  </svg>
                </label>
              </div>

              <ul
                tabIndex={0}
                className={`menu absolute mr-6  -left-64 -translate-y-[3.6rem] min-w-60 menu-sm md:hidden text-xl  dropdown-content border-opacity-60 
                   mt-3 z-[10] shadow-lg  bg-base-100  min-h-screen  rounded-r-xl   gap-2    ${
                     menu && " -left-[0.1rem]  duration-300 transition-all  "
                   }`}
              >
                {user && (
                  <li className="flex  items-center    ">
                    <div className="avatar">
                      <div className="w-10 rounded-full ring-1 ring-[#4b5664] ring-offset-base-100 ring-offset-2">
                        <img src={user?.photoURL || profile} />
                      </div>
                    </div>
                    <div>
                      <h2
                        className={`text-lg font-bold ${
                          theme === "light" ? "text-[#191515]" : "text-white"
                        }  `}
                      >
                        {user?.displayName || "Anonymous"}
                      </h2>
                    </div>
                  </li>
                )}

                <li
                  className={` rounded-md bg-gray-800 text-white  `}
                  // ${user ? "" : "mt-16"}
                >
                  <p className={`flex items-center p-2 space-x-3 rounded-md  `}>
                    <SiReactrouter
                      className={`text-xl  ${
                        location.pathname == "/" ? "text-red-800" : "text-white"
                      } `}
                    />
                    <span>Route</span>
                  </p>
                </li>
                {responsiveNavLinks}

                <div
                  className={` ${
                    theme === "light" ? "bg-gray-800" : "bg-white"
                  } w-full inline-flex h-[1px] my-2`}
                ></div>
                <li className="">
                  {user ? (
                    <button
                      onClick={() => {
                        handleLogout();
                        setMenu(false);
                      }}
                      className={`flex px-2 py-1 w-fit  relative rounded group overflow-hidden font-medium border-b  
                    ${
                      theme === "light"
                        ? "border-gray-800 text-gray-800"
                        : "border-gray-50 text-white"
                    }
              `}
                    >
                      <span
                        className={`absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 ${
                          theme === "light" ? "bg-gray-800" : "bg-gray-50"
                        }  group-hover:h-full opacity-90`}
                      ></span>
                      <span
                        className={`relative ${
                          theme === "light"
                            ? "group-hover:text-white"
                            : "group-hover:text-black"
                        } `}
                      >
                        Logout
                      </span>
                    </button>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        onClick={() => setMenu(false)}
                        className={`flex px-6  py-1 w-fit mb-4 relative rounded group overflow-hidden font-medium border-b  
                      ${
                        theme === "light"
                          ? "border-gray-800 text-gray-800"
                          : "border-gray-50 text-white"
                      }
              
              `}
                      >
                        <span
                          className={`absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0  ${
                            theme === "light" ? "bg-gray-800" : "bg-gray-50"
                          } group-hover:h-full opacity-90`}
                        ></span>
                        <span
                          className={`relative ${
                            theme === "light"
                              ? "group-hover:text-white"
                              : "group-hover:text-black"
                          }  `}
                        >
                          Sign In
                        </span>
                      </Link>
                    </>
                  )}
                </li>
              </ul>
            </OutsideClickHandler>
            {/* responsive menu end    */}

            <ul className="menu menu-horizontal px-1 py-0 h-16 md:gap-8 hidden  md:flex items-center ">
              {loading ? (
                <div className=" md:flex hidden  items-center gap-1">
                  <div
                    className=" tooltip-left md:tooltip-bottom tooltip  flex items-center "
                    data-tip={user?.displayName || "Anonymous"}
                  >
                    <div className="avatar">
                      <div className="w-8 rounded-full tooltip  ">
                        <img src={user?.photoURL || profile} />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                user && (
                  <div
                    className={`h-full  relative group  flex items-center justify-center `}
                  >
                    <button>
                      <div className=" md:flex hidden  items-center gap-1">
                        <div className="avatar">
                          <div className="w-8 rounded-full tooltip  ">
                            <img src={user?.photoURL || profile} />
                          </div>
                        </div>
                      </div>
                    </button>

                    <ul
                      className="h-fit -translate-y-44 -translate-x-28   group-hover:translate-y-[5.5rem]  transition-transform duration-500
             w-40 px-4 py-4   bg-black text-white  absolute left-0 bottom-0"
                    >
                      <IoMdArrowDropup className="text-black text-4xl absolute translate-x-24  -translate-y-[2.3rem] " />
                      <div className="flex flex-col justify-end items-end gap-2">
                        {user && (
                          <>
                            <h1 className=" text-sm">
                           
                           
                              {user?.displayName ? user?.displayName : "Anonymous"}
                            </h1>

                            <button
                              onClick={handleLogout}
                              className="flex items-center text-sm gap-1"
                            >
                              {" "}
                              <MdLogout /> logout
                            </button>
                          </>
                        )}
                      </div>
                    </ul>
                  </div>
                )
              )}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
