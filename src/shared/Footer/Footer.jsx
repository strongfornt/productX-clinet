import logo from "../../assets/projectLogo/F.svg";
import us from "../../assets/additionalPic/us.png"
import { TbBrandFacebook } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { LuLinkedin } from "react-icons/lu";
export default function Footer() {
  return (
    <>
      <footer className="px-4 divide-y text-[#81859F] bg-[#0E0E0E]">
        <div className="container flex flex-col justify-between py-16 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex justify-center space-x-2 lg:justify-start"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-[#1E99F5]">
                <img className="w-5" src={logo} alt="" />
              </div>
              <span className="self-center text-[#FFFFFF] text-xl font-bold">
                Furni<span className="text-[#1E99F5]">Flex</span>{" "}
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-[57%] sm:grid-cols-3">
            <div className="space-y-3">
              <h3 className="tracking-wide text-[#FFFFFF] font-semibold text-lg ">
                About Us
              </h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer " className="hover:text-[#1E99F5] duration-300"  href="#">
                    Master Plan
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" className="hover:text-[#1E99F5] duration-300"  href="#">
                    Jobs
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer"  className="hover:text-[#1E99F5] duration-300"  href="#">
                    Invest
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" className="hover:text-[#1E99F5] duration-300"  href="#">
                    Pressroom
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" className="hover:text-[#1E99F5] duration-300"  href="#">
                    Blog
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" className="hover:text-[#1E99F5] duration-300"  href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="tracking-wide text-[#FFFFFF] font-semibold text-lg">
                Explore EEVE
              </h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" className="hover:text-[#1E99F5] duration-300"  href="#">
                    Unlock my Robot Power
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" className="hover:text-[#1E99F5] duration-300"  href="#">
                    Starlight
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" className="hover:text-[#1E99F5] duration-300"  href="#">
                    Robot Platform
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" className="hover:text-[#1E99F5] duration-300"  href="#">
                    EEVE Roadmap
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="tracking-wide text-[#FFFFFF] font-semibold text-lg ">
                Developers
              </h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" className="hover:text-[#1E99F5] duration-300"  href="#">
                    Willow X Community
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" className="hover:text-[#1E99F5] duration-300"  href="#">
                    Developers & Maker Access
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" className="hover:text-[#1E99F5] duration-300"  href="#">
                    Special Cases
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          {/* second elements ============ */}
          <div className="container flex flex-col items-center justify-between px-6 py-8 mx-auto lg:flex-row">
            <div className="flex gap-2" >
            <TbBrandFacebook />
            <IoLogoInstagram />
            <FaXTwitter />
            <LuLinkedin />
            </div>
            {/* <a href="#">
              <img
                className="w-auto h-7"
                src="https://merakiui.com/images/full-logo.svg"
                alt=""
              />
            </a> */}

            <div className="flex flex-wrap items-center justify-center gap-4 mt-6 lg:gap-6 lg:mt-0">
              <a
                href="#"
                className="text-sm font-semibold text-[#81859F] hover:text-[#1E99F5] transition-colors duration-300 "
              >
                March22 Recap
              </a>

              <a
                href="#"
                className="text-sm font-semibold text-[#81859F] hover:text-[#1E99F5] transition-colors duration-300   "
              >
               Privacy Policy
              </a>

              <a
                href="#"
                className="text-sm font-semibold text-[#81859F] hover:text-[#1E99F5] transition-colors duration-300 "
              >
                General Terms
              </a>
              <a
                href="#"
                className="text-sm font-semibold text-[#81859F] hover:text-[#1E99F5] transition-colors duration-300 "
              >
                Contact
              </a>

          
            </div>
           
            <p className="mt-6 text-sm font-semibold text-[#81859F] lg:mt-0 ">
             <span >
                <img className="inline-flex mr-1" src={us} alt="alt" />
                </span> United States (English){" "}
            </p>
          </div>
          {/* second elements ============ */}

          <div className="py-6 text-sm font-semibold text-center text-[#323544] ">
            EEVE © 2024. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
