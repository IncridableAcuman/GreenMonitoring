import { Eye, EyeClosed, Lock } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  ResetPasswordSchema,
  type ResetPasswordFormInputs,
} from "../schema/auth.schema";
import { toast } from "react-toastify";
import axiosInstance from "../api/api";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmShowPassword, setConfirmShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.input<typeof ResetPasswordSchema>>({
    resolver: zodResolver(ResetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: ResetPasswordFormInputs) => {
    try {
      const { data } = await axiosInstance.put("/reset-password", values);
      toast.success(data ? data : "Updated successfully.");
      navigate("/auth");
    } catch (error) {
      console.log(error);
      toast.error("There was an error updating your password!");
    }
  };

  return (
    <div className="bg_image h-screen w-full flexing_style2">
      <div className="bg-gray-950 text-white w-full max-w-xl p-8 rounded-md shadow-md">
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-semibold py-4">
            Change Your Password
          </h1>
          <p className="pb-8">
            Enter a new password below to change your password.
          </p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Password */}
          <div className="">
            <div className="flex items-center gap-2 border border-gray-800 bg-gray-900 p-3 rounded-md">
              <Lock />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="New Password"
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
            </div>
            {errors.password && (
              <span className="text-xs text-red-500">
                {errors.password.message}
              </span>
            )}
          </div>
          {/* Confirm password */}
          <div className="">
            <div className="flex items-center gap-2 border border-gray-800 bg-gray-900 p-3 rounded-md">
              <Lock />
              <input
                type={confirmShowPassword ? "text" : "password"}
                id="password"
                placeholder="Re-enter new password"
                className="w-full outline-none bg-transparent"
                {...register("confirmPassword")}
              />
              {confirmShowPassword ? (
                <Eye
                  className="cursor-pointer"
                  onClick={() => setConfirmShowPassword(false)}
                />
              ) : (
                <EyeClosed
                  className="cursor-pointer"
                  onClick={() => setConfirmShowPassword(true)}
                />
              )}
            </div>
            {errors.confirmPassword && (
              <span className="text-xs text-red-500">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-linear-to-r from-pink-500 to-purple-600 p-3 rounded-md shadow-md cursor-pointer
           hover:bg-linear-to-r hover:from-purple-600 hover:to-pink-500 transition duration-300"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
