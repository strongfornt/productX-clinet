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
      <div className="flex min-h-screen flex-row-reverse  overflow-hidden    ">
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
          <div className="px-6 py-6 w-full  lg:w-9/12 bg-[#F5F5F5] border rounded-md  ">
            <p className="text-2xl font-semibold text-center ">
              Welcome To <br />
              <p className="text-4xl mt-1 font-bold">
                Furni<span className="text-[#4977EE]">Flex</span>
              </p>
            </p>
            <p className="text-[#707070] text-center  text-sm font-medium ">
              Signup for purchase your desire products
            </p>

            {/* <a
              href="#"
              className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <div className="px-4 py-2">
                <svg className="w-6 h-6" viewBox="0 0 40 40">
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#1976D2"
                  />
                </svg>
              </div>

              <span className="w-5/6 px-4 py-3 font-bold text-center">
                Sign in with Google
              </span>
            </a> */}

            <form className="mt-4 space-y-2">
              {/* name input start ========= */}
              <div className="grid grid-cols-2 gap-2">
                {/* first name=== */}
                <div className="px-4 border border-[#DEDEDE]  rounded-md  bg-[#FFFFFF]">
                  <label
                    htmlFor=""
                    className="font-normal  text-xs text-[#707070]"
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
                <div className="px-4 border border-[#DEDEDE]  rounded-md  bg-[#FFFFFF]">
                  <label
                    htmlFor=""
                    className="font-normal  text-xs text-[#707070]"
                  >
                    Last name (optional)
                  </label>
                  <input
                    id="lastname"
                    name="lastname"
                    className="focus:outline-none"
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
              <div className="flex items-center">
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
                className="w-full px-6 py-3 text-lg font-semibold tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#000000] rounded-md hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
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
