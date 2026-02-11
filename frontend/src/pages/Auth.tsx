import { Eye, EyeClosed, Lock, Mail, UserRound } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaGoogle, FaGithub } from "react-icons/fa";
import ForgotPasswordModal from "../components/ForgotPasswordModal";
const Auth = () => {
  const [isAuth, setIsAuth] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false);
  return (
    <>
      <motion.div className="bg_image h-screen w-full flexing_style2">
        <div className="bg-gray-950 text-white w-full max-w-xl p-8 rounded-md shadow-md">
          <h1 className="text-2xl md:text-3xl font-semibold py-4">
            {isAuth ? "Get Started Now" : "Create account"}
          </h1>
          <p className="pb-8">Enter your credentials to login your account</p>
          <form className="space-y-4">
            {/* firstname */}
            {!isAuth && (
              <>
                <div className="flex items-center gap-2 border border-gray-800 bg-gray-900 p-3 rounded-md">
                  <UserRound />
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    placeholder="Firstname"
                    className="w-full outline-none bg-transparent"
                  />
                </div>
                {/* lastname */}
                <div className="flex items-center gap-2 border border-gray-800 bg-gray-900 p-3 rounded-md">
                  <UserRound />
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Lastname"
                    className="w-full outline-none bg-transparent"
                  />
                </div>
                {/* username */}
                <div className="flex items-center gap-2 border border-gray-800 bg-gray-900 p-3 rounded-md">
                  <UserRound />
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    className="w-full outline-none placeholder:bg-transparent"
                  />
                </div>
              </>
            )}
            {/* email */}
            <div className="flex items-center gap-2 border border-gray-800 bg-gray-900 p-3 rounded-md">
              <Mail />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email"
                className="w-full outline-none bg-transparent"
              />
            </div>
            {isAuth && (
              <div className="flexing_style1 text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="check" id="check" />
                  <span>Remember me</span>
                </div>
                <p
                  className="cursor-pointer hover:underline text-blue-800"
                  onClick={() => setForgotPasswordOpen(true)}
                >
                  Forgot Password?
                </p>
              </div>
            )}
            {/* password */}
            <div className="flex items-center gap-2 border border-gray-800 bg-gray-900 p-3 rounded-md">
              <Lock />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Your password"
                className="w-full outline-none bg-transparent"
              />
              {showPassword ? (
                <Eye
                  className="cursor-pointer"
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <EyeClosed
                  className="cursor-pointer"
                  onClick={() => setShowPassword(true)}
                />
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-linear-to-r from-pink-500 to-purple-600 p-3 rounded-md shadow-md cursor-pointer
           hover:bg-linear-to-r hover:from-purple-600 hover:to-pink-500 transition duration-300"
            >
              {isAuth ? "Sign In" : "Sign Up"}
            </button>
          </form>
          <div className="space-y-4 pt-2">
            {isAuth ? (
              <p
                className="text-sm py-4 flex items-center gap-2"
                onClick={() => setIsAuth(false)}
              >
                Don't have an account yet?
                <span className="text-blue-800 font-bold cursor-pointer hover:underline">
                  Sign Up here
                </span>
              </p>
            ) : (
              <p
                className="text-sm py-4 flex items-center gap-2"
                onClick={() => setIsAuth(true)}
              >
                Already have an account?
                <span className="text-blue-800 font-bold cursor-pointer hover:underline">
                  Sign In here
                </span>
              </p>
            )}
            <div className="flex items-center justify-center uppercase font-semibold text-sm gap-3">
              <p className="h-px bg-gray-700 w-full max-w-44"></p>
              <p>or sign in with</p>
              <p className="h-px bg-gray-700 w-full max-w-44"></p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <button
                className="bg-amber-700 text-white p-2 rounded-full cursor-pointer
           hover:bg-amber-600 transition duration-300"
              >
                <FaGoogle />
              </button>
              <button
                className="bg-gray-700 text-white p-2 rounded-full cursor-pointer
           hover:bg-gray-600 transition duration-300"
              >
                <FaGithub />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
      <ForgotPasswordModal forgotPasswordOpen={forgotPasswordOpen} onClose={()=>setForgotPasswordOpen(false)} />
    </>
  );
};

export default Auth;
