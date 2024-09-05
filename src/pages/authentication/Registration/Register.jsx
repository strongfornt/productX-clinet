import { IoIosEyeOff, IoMdEye } from "react-icons/io";
import chair from "../../../assets/authenticationPic/chairMain.png";
import logo from "../../../assets/projectLogo/F.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";

export default function Register() {
  const [showPass, setShowPass] = useState(false);

  return (
    <>
      <div className="flex min-h-screen flex-row-reverse  overflow-hidden p-3 lg:p-0   ">
        <div
          className="hidden bg-center bg-cover  bg-no-repeat lg:block flex-1"
          style={{ backgroundImage: `url(${chair})` }}
        >
          <div className="flex flex-col items-center justify-center text-center h-full" >
            <div className="bg-[#1E99F5] w-fit inline-flex p-4 rounded-full ">
              <img className="" src={logo} alt="logo" />
            </div>
            <div>
              <h2 className="text-4xl text-white  font-bold">
                Furni<span className="text-[#4977EE]">Flex</span>
              </h2>
              <p className="text-[#C8C4C4] font-medium text-sm max-w-sm">
                Discover a seamless shopping experience with our curated
                collection of products. From fashion to electronics, we bring
                quality.
              </p>
            </div>
          </div>
        </div>

        {/* register form rapper div start ============ */}
        <div className=" w-full  flex flex-1  items-center justify-center">
          <div className="px-6 py-6  w-full  md:w-9/12 bg-[#F5F5F5] border rounded-md  ">
            <p className="text-2xl font-semibold text-center ">
              Welcome To <br />
              <p className="text-4xl mt-1 font-bold">
                Furni<span className="text-[#4977EE]">Flex</span>
              </p>
            </p>
            <p className="text-[#707070] text-center  text-sm font-medium ">
              Signup for purchase your desire products
            </p>

            

            <form className="mt-4 space-y-2">
              {/* name input start ========= */}
              <div className="grid grid-cols-2   gap-2">
                {/* first name=== */}
                <div className="px-4 border border-[#DEDEDE] overflow-hidden rounded-md  bg-[#FFFFFF]">
                  <label
                    htmlFor=""
                    className="font-normal block  mt-1 text-xs text-[#707070]"
                  >
                    First name (optional)
                  </label>
                  <input
                    id="firstname"
                    name="lastname"
                    className="focus:outline-none"
                    type="text"
                  />
                </div>
                {/* last name== */}
                <div className="px-4 border border-[#DEDEDE] overflow-hidden rounded-md  bg-[#FFFFFF]">
                  <label
                    htmlFor=""
                    className="font-normal block mt-1 text-xs text-[#707070]"
                  >
                    Last name (optional)
                  </label>
                  <input
                    id="lastname"
                    name="lastname"
                    className="focus:outline-none  "
                    type="text"
                  />
                </div>
              </div>
              {/* name input end ========= */}

              <div className="px-4 border border-[#DEDEDE]  rounded-md  bg-[#FFFFFF]">
                <label
                  htmlFor=""
                  className="font-normal block mt-1  text-xs text-[#707070]"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  className="focus:outline-none w-full"
                  type="email"
                  required
                />
              </div>

              <div className="px-4 relative border border-[#DEDEDE]  rounded-md  bg-[#FFFFFF]">
                <label
                  htmlFor=""
                  className="font-normal block mt-1 text-xs text-[#707070]"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  className="focus:outline-none w-full"
                  type={showPass ? "text" : "password"}
                  required
                  placeholder="******"
                />
                <button
                  onClick={() => setShowPass(!showPass)}
                  className="absolute  right-2 top-3 text-[#707070] text-2xl"
                >
                  {showPass ? <IoMdEye /> : <IoIosEyeOff />}
                </button>
              </div>
              <div className="flex items-center ">
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  aria-label="Remember me"
                  className="mr-1 rounded-sm focus:dark:ring-[#4977EE] focus:dark:border-[#4977EE] focus:ring-2 dark:accent-[#4977EE"
                />
                <label
                  htmlFor="remember"
                  className="text-sm font-normal dark:text-[#000000]"
                >
                  I agree to the Terms & Policy
                </label>
              </div>

              <button
                type="submit"
                className="w-full  px-6 py-3 text-lg font-semibold tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#000000] rounded-md hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
              >
                Signup
              </button>
            </form>

            <div className="flex items-center justify-between my-4">
              <span className=" border-b dark:border-gray-600 w-1/2"></span>

              <a
                href="#"
                className="text-xs font-medium text-black  px-2   hover:underline"
              >
                or
              </a>

              <span className=" border-b dark:border-gray-600 w-1/2"></span>
            </div>

            {/* sign up with google and apple */}
            <div className="grid grid-cols-2 gap-2">
              <button className="text-sm  font-medium border px-4 py-3 border-[#D9D9D9] rounded-md">
                <span className="inline-flex align-text-bottom text-xl mr-1 ">
                  <FcGoogle />{" "}
                </span>{" "}
                Sign in with Google
              </button>
              <button className="text-sm font-medium border px-4 py-3 border-[#D9D9D9] rounded-md">
                <span className="inline-flex align-text-bottom text-xl mr-1">
                  <BsApple />{" "}
                </span>{" "}
                Sign in with Apple
              </button>
            </div>
            {/* sign up with google and apple */}

            <p className="text-sm mt-3 text-center font-medium text-[#000000]">
              Have an account?{" "}
              <Link to="/login">
                <span className="text-[#0F3DDE]">Sign in</span>
              </Link>{" "}
            </p>
          </div>
        </div>
        {/* register form rapper div end ============ */}
      </div>
    </>
  );
}
