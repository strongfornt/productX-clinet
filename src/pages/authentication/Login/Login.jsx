/* eslint-disable no-unused-vars */
import { IoIosEyeOff, IoMdEye } from "react-icons/io";
import chair from "../../../assets/authenticationPic/chairMain.png";
import logo from "../../../assets/projectLogo/F.svg";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import useContextProvider from "../../../useHooks/useContextProvider";
import toast from "react-hot-toast";
import auth from "../../../firebase/firebase.config";
import { Helmet } from "react-helmet-async";

export default function Login() {
    const location = useLocation();
    const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [getMail, setGetMail] = useState('')
  const [isAcceptTerms, setIsAcceptTerms] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const { googleLogin, appleLogin, signInUser, user,  resetPassword  } =
    useContextProvider();

  //idp login =============
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.email.value;
    const password = form.password.value;
    
    setIsProcessing(true);
    setIsAcceptTerms(false);
    //sign in user ===
    e.preventDefault();
    signInUser(email, password)
      .then(() => {
        setIsProcessing(false)
        form.reset();
        toast.success("You're in! Welcome back!");
      })
      .catch(() => {
        setIsProcessing(false)
        toast.error("invalid password or email");
      });
    
  };

  //google login =======
  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      toast.success("You're in! Welcome back!");
    } catch (error) {
      toast.error("Sign-in error. Check connection.");
    }
  };

  //apple login ===
  const handleAppleLogin = async () => {
    try {
      await appleLogin();
    } catch (error) {
      toast.error(
        "Apple Sign-In is currently unavailable. Please try again later."
      );
    }
  };

  // handle reset password ==========
  const handleResetPassword = async() => {
    if (getMail.length === 0) {
        toast.error('Please enter your email address first.');
        return;
      }
        try {
            await resetPassword(getMail)
            toast.success('Password reset email sent! Check your inbox.')
        } catch (error) {
            console.log(error);
            if (error.code === 'auth/user-not-found') {
                toast.error('No account found with this email address.');
              } else if (error.code === 'auth/invalid-email') {
                toast.error('Please enter a valid email address.');
              } else  {
                toast.error('An error occurred. Please try again later.');
              }
            
        }
  }

  useEffect(() => {
    if (user) {
     if(location.state){
        navigate(location.state);
     }else{
        navigate('/')
     }
    }
  }, [location.state, navigate, user]);

  return (
    <>
    <Helmet>
        <title>Sign In | FurniFlex</title>
    </Helmet>
      <div className="flex min-h-screen flex-row-reverse  overflow-hidden p-3 lg:p-0   ">
        <div
          className="hidden bg-center bg-cover  bg-no-repeat lg:block flex-1"
          style={{ backgroundImage: `url(${chair})` }}
        >
          <div className="flex flex-col items-center justify-center text-center h-full">
            <div className="bg-[#1E99F5] w-fit inline-flex p-4 rounded-full ">
              <img className="" src={logo} alt="logo" />
            </div>
            <div>
              <h2 className="text-4xl text-white  font-bold">
                Furni<span className="text-[#1E99F5]">Flex</span>
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
            <p className="text-2xl font-semibold  ">Welcome Back!</p>
            <p className="text-[#707070]   text-sm font-medium ">
              Enter your Credentials to access your account
            </p>

            <form onSubmit={handleFormSubmit} className="mt-9 space-y-2">
              <div className="px-4 border border-[#DEDEDE]  rounded-md  bg-[#FFFFFF]">
                <label
                  htmlFor=""
                  className="font-normal block mt-1  text-xs text-[#707070]"
                >
                  Email address
                </label>
                <input
                onChange={(e)=> setGetMail(e.target.value)}
                  id="email"
                  name="email"
                  className="focus:outline-none w-full"
                  type="email"
                  required
                />
              </div>

              <div className="px-4  relative border border-[#DEDEDE]  rounded-md  bg-[#FFFFFF]">
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
                  onClick={(e) => {
                    e.preventDefault();
                    setShowPass(!showPass);
                  }}
                  className="absolute  right-2 top-3 text-[#707070] text-2xl"
                >
                  {showPass ? <IoMdEye /> : <IoIosEyeOff />}
                </button>
              </div>

              <div className="flex justify-end">
                <button onClick={(e) => {
                    e.preventDefault();
                    handleResetPassword()

                }} className="text-[#1E99F5] font-medium text-sm ">
                  Forgot Password
                </button>
              </div>
              <div className="flex items-center   ">
                <input
                  onChange={() => {
                    setIsAcceptTerms(!isAcceptTerms);
                  }}
                  checked={isAcceptTerms}
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

              <div className="pt-2">
                <button
                  disabled={isAcceptTerms !== true}
                  type="submit"
                  className="w-full  px-6 py-3 text-lg font-semibold tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#000000] rounded-md hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                >
                  {isProcessing ? (
                    <div className="flex gap-2 items-center justify-center">
                      <span className="w-6 h-6 border-4 inline-flex border-dashed rounded-full animate-spin border-[#4977EE]"></span>
                      <span> Processing...</span>
                    </div>
                  ) : (
                    <span>Sign In</span>
                  )}
                </button>
              </div>
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
              <button
                onClick={handleGoogleLogin}
                className="text-sm  font-medium border px-4 py-3 border-[#D9D9D9] hover:bg-gray-300/25 duration-300 rounded-md"
              >
                <span className="inline-flex align-text-bottom text-xl mr-1 ">
                  <FcGoogle />{" "}
                </span>{" "}
                Sign in with Google
              </button>
              <button
                onClick={handleAppleLogin}
                className="text-sm font-medium border hover:bg-gray-300/25 duration-300  px-4 py-3 border-[#D9D9D9] rounded-md"
              >
                <span className="inline-flex align-text-bottom text-xl mr-1">
                  <BsApple />{" "}
                </span>{" "}
                Sign in with Apple
              </button>
            </div>
            {/* sign up with google and apple */}

            <p className="text-sm mt-3 text-center font-medium text-[#000000]">
              Don&apos;t Have an account?{" "}
              <Link to="/register">
                <span className="text-[#0F3DDE]">Sign Up</span>
              </Link>{" "}
            </p>
          </div>
        </div>
        {/* register form rapper div end ============ */}
      </div>
    </>
  );
}
