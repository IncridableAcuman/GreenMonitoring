import { Eye, EyeClosed, Lock } from "lucide-react";
import { useState } from "react";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmShowPassword,setConfirmShowPassword] = useState(false);

  return (
    <div className="bg_image h-screen w-full flexing_style2">
      <div className="bg-gray-950 text-white w-full max-w-xl p-8 rounded-md shadow-md text-center">
        <h1 className="text-2xl md:text-3xl font-semibold py-4">
          Change Your Password
        </h1>
        <p className="pb-8">
          Enter a new password below to change your password.
        </p>
        <form className="space-y-4">
          <div className="flex items-center gap-2 border border-gray-800 bg-gray-900 p-3 rounded-md">
            <Lock />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="New Password"
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
          <div className="flex items-center gap-2 border border-gray-800 bg-gray-900 p-3 rounded-md">
            <Lock />
            <input
              type={confirmShowPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Re-enter new password"
              className="w-full outline-none bg-transparent"
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
          <button
            type="submit"
            className="w-full bg-linear-to-r from-pink-500 to-purple-600 p-3 rounded-md shadow-md cursor-pointer
           hover:bg-linear-to-r hover:from-purple-600 hover:to-pink-500 transition duration-300"
          >Reset Password</button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
