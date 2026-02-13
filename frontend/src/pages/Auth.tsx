import { Eye, EyeClosed, Lock, Mail, UserRound } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  LoginSchema,
  RegisterSchema,
  type LoginFormInputs,
  type RegisterFormInputs,
} from "../schema/auth.schema";
import { z } from "zod";
import ForgotPasswordModal from "../components/ForgotPasswordModal";
import { toast } from "react-toastify";
import axiosInstance from "../api/api";
import { useNavigate } from "react-router-dom";
import { UseLoader } from "../contexts/LoaderProvider";
const Auth = () => {
  const { isLoading, startLoading, stopLoading } = UseLoader();
  const [isAuth, setIsAuth] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false);

  const navigate = useNavigate();

  const loginForm = useForm<z.input<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const registerForm = useForm<z.input<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
    },
  });

  const onLoginSubmit = async (values: LoginFormInputs) => {
    startLoading();
    try {
      const { data } = await axiosInstance.post("/auth/login", values);
      localStorage.setItem("accessToken", data.accessToken);
      toast.success("Successfully");
      await new Promise((resolve) => setTimeout(resolve, 2000));
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Authentication failed!");
    } finally {
      stopLoading();
    }
  };

  const onRegisterSubmit = async (values: RegisterFormInputs) => {
    try {
      const { data } = await axiosInstance.post("/auth/register", values);
      localStorage.setItem("accessToken", data.accessToken);
      toast.success("Successfully");
      await new Promise((resolve) => setTimeout(resolve, 2000));
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Registration failed!");
    }
  };

  const registerErrors = registerForm.formState.errors;
  const registerValues = registerForm.register;

  const loginErrors = loginForm.formState.errors;
  const loginValues = loginForm.register;

  return (
    <>
      {!forgotPasswordOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="bg_image h-screen w-full flexing_style2"
        >
          <div className="bg-gray-950 text-white w-full max-w-xl p-8 rounded-md shadow-md">
            <h1 className="text-2xl md:text-3xl font-semibold py-4">
              {isAuth ? "Get Started Now" : "Create account"}
            </h1>
            <p className="pb-8">Enter your credentials to login your account</p>
            <form
              className="space-y-4"
              onSubmit={
                isAuth
                  ? loginForm.handleSubmit(onLoginSubmit)
                  : registerForm.handleSubmit(onRegisterSubmit)
              }
            >
              {/* firstname */}
              {!isAuth && (
                <>
                  {/* Firstname */}
                  <div className="">
                    <motion.div
                      whileFocus={{ scale: 1.02, borderColor: "#6b7280" }}
                      whileHover={{ borderColor: "#4b5563" }}
                      transition={{ duration: 0.2 }}
                      className={`flex items-center gap-2 border border-gray-800 bg-gray-900 p-3 rounded-md
                 focus-within:bg-gray-700 transition duration-300`}
                    >
                      <UserRound />
                      <input
                        type="text"
                        id="firstname"
                        placeholder="Firstname"
                        className="w-full outline-none bg-transparent"
                        {...registerValues("firstname")}
                      />
                    </motion.div>
                    {registerErrors.firstname && (
                      <span className="text-xs text-red-500">
                        {registerErrors.firstname.message}
                      </span>
                    )}
                  </div>
                  {/* Lastname */}
                  <div className="">
                    <motion.div
                      whileFocus={{ scale: 1.02, borderColor: "#6b7280" }}
                      whileHover={{ borderColor: "#4b5563" }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center gap-2 border border-gray-800 bg-gray-900 p-3 rounded-md
                 focus-within:bg-gray-700 transition duration-300"
                    >
                      <UserRound />
                      <input
                        type="text"
                        id="lastname"
                        placeholder="Lastname"
                        className="w-full outline-none bg-transparent"
                        {...registerValues("lastname")}
                      />
                    </motion.div>
                    {registerErrors.lastname && (
                      <span className="text-xs text-red-500">
                        {registerErrors.lastname.message}
                      </span>
                    )}
                  </div>
                  {/* username */}
                  <div className="">
                    <motion.div
                      whileFocus={{ scale: 1.02, borderColor: "#6b7280" }}
                      whileHover={{ borderColor: "#4b5563" }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center gap-2 border border-gray-800 bg-gray-900 p-3 rounded-md
                 focus-within:bg-gray-700 transition duration-300"
                    >
                      <UserRound />
                      <input
                        type="text"
                        id="username"
                        placeholder="Username"
                        className="w-full outline-none placeholder:bg-transparent"
                        {...registerValues("username")}
                      />
                    </motion.div>
                    {registerErrors.username && (
                      <span className="text-xs text-red-500">
                        {registerErrors.username.message}
                      </span>
                    )}
                  </div>
                </>
              )}
              {/* email */}
              <div className="">
                <motion.div
                  whileFocus={{ scale: 1.02, borderColor: "#6b7280" }}
                  whileHover={{ borderColor: "#4b5563" }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2 border border-gray-800 bg-gray-900 p-3 rounded-md
             focus-within:bg-gray-700 transition duration-300"
                >
                  <Mail />
                  <input
                    type="email"
                    id="email"
                    placeholder="Your email"
                    className="w-full outline-none bg-transparent"
                    {...(isAuth
                      ? loginValues("email")
                      : registerValues("email"))}
                  />
                </motion.div>
                {(isAuth ? loginErrors.email : registerErrors.email) && (
                  <span className="text-xs text-red-500">
                    {isAuth
                      ? loginErrors.email?.message
                      : registerErrors.email?.message}
                  </span>
                )}
              </div>
              {isAuth && (
                <div className="flexing_style1 text-sm font-semibold">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" name="check" id="check" />
                    <span>Remember me</span>
                  </div>
                  <p
                    className="cursor-pointer hover:underline text-blue-800 transition duration-300"
                    onClick={() => setForgotPasswordOpen(true)}
                  >
                    Forgot Password?
                  </p>
                </div>
              )}
              {/* password */}
              <div className="">
                <motion.div
                  whileFocus={{ scale: 1.02, borderColor: "#6b7280" }}
                  whileHover={{ borderColor: "#4b5563" }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2 border border-gray-800 bg-gray-900 p-3 rounded-md
             focus-within:bg-gray-700 transition duration-300"
                >
                  <Lock />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Your password"
                    className="w-full outline-none bg-transparent"
                    {...(isAuth
                      ? loginValues("password")
                      : registerValues("password"))}
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
                </motion.div>
                {(isAuth ? loginErrors.password : registerErrors.password) && (
                  <span className="text-xs text-red-500">
                    {isAuth
                      ? loginErrors.password?.message
                      : registerErrors.password?.message}
                  </span>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-linear-to-r from-pink-500 to-purple-600 p-3 rounded-md shadow-md cursor-pointer
           hover:bg-linear-to-r hover:from-purple-600 hover:to-pink-500 transition duration-300"
              >
                {isLoading ? "Loading..." : isAuth ? "Sign In" : "Sign Up"}
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
      )}
      <ForgotPasswordModal
        forgotPasswordOpen={forgotPasswordOpen}
        onClose={() => setForgotPasswordOpen(false)}
      />
    </>
  );
};

export default Auth;
