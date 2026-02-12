import { Eye, EyeClosed, Lock, Mail, UserRound } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema, type RegisterFormInputs } from "../schema/auth.schema";
import { z } from "zod";
import ForgotPasswordModal from "../components/ForgotPasswordModal";
import { toast } from "react-toastify";
import axiosInstance from "../api/api";
import { useNavigate } from "react-router-dom";
const Auth = () => {
  const [isAuth, setIsAuth] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.input<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: RegisterFormInputs) => {
    try {
      const { data } = await axiosInstance.post("/register", values);
      localStorage.setItem("accessToken", data.accessToken);
      toast.success("Successfully");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Registration failed!");
    }
  };

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
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
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
                        {...register("firstname")}
                      />
                    </motion.div>
                    {errors.firstname && (
                      <span className="text-xs text-red-500">
                        {errors.firstname.message}
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
                        {...register("lastname")}
                      />
                    </motion.div>
                    {errors.lastname && (
                      <span className="text-xs text-red-500">
                        {errors.lastname.message}
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
                        {...register("username")}
                      />
                    </motion.div>
                    {errors.username && (
                      <span className="text-xs text-red-500">
                        {errors.username.message}
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
                    {...register("email")}
                  />
                </motion.div>
                {errors.email && (
                  <span className="text-xs text-red-500">
                    {errors.email.message}
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
                    {...register("password")}
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
                {errors.password && (<span className="text-xs text-red-500">{errors.password.message}</span>)}
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
      )}
      <ForgotPasswordModal
        forgotPasswordOpen={forgotPasswordOpen}
        onClose={() => setForgotPasswordOpen(false)}
      />
    </>
  );
};

export default Auth;
