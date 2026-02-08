import { Lock, Mail, UserRound } from "lucide-react";
import { useState } from "react";
const Auth = () => {
  const [isAuth, setIsAuth] = useState(true);
  return (
    <div className="bg_image h-screen w-full flexing_style2">
      <div className="bg-gray-900 text-white w-full max-w-xl p-8 rounded-md shadow-md">
        <h1 className="text-2xl md:text-3xl font-semibold py-4">
          {isAuth ? "Sign In" : "Sign Up"}
        </h1>
        {isAuth ? (
          <>
            <p className="flex items-center justify-end gap-2 py-2">
              Don't have an account?{" "}
              <span
                onClick={() => setIsAuth(false)}
                className="font-semibold cursor-pointer hover:underline"
              >
                Sign Up
              </span>
            </p>
          </>
        ) : (
          <>
            <p className="flex items-center justify-end gap-2 py-2">
              Already have an account?{" "}
              <span
                onClick={() => setIsAuth(true)}
                className="font-semibold cursor-pointer hover:underline"
              >
                Sign In
              </span>
            </p>
          </>
        )}
        <form className="space-y-4">
          {/* firstname */}
          {!isAuth && (
            <>
              <div className="flex items-center gap-2 border border-blue-900 p-3 rounded-md">
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
              <div className="flex items-center gap-2 border border-blue-900 p-3 rounded-md">
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
              <div className="flex items-center gap-2 border border-blue-900 p-3 rounded-md">
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
          <div className="flex items-center gap-2 border border-blue-900 p-3 rounded-md">
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
            <div className="flexing_style1">
              <div className="flex items-center gap-2">
                <input type="checkbox" name="check" id="check" />
                <span>Remember me</span>
              </div>
              <p className="cursor-pointer hover:underline">Forgot Password?</p>
            </div>
          )}
          {/* password */}
          <div className="flex items-center gap-2 border border-blue-900 p-3 rounded-md">
            <Lock />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Your password"
              className="w-full outline-none bg-transparent"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-900 p-3 rounded-md shadow-md cursor-pointer
           hover:bg-indigo-800 transition duration-300"
          >
            {isAuth ? "Sign In" : "Sign Up"}
          </button>
        </form>
        <div className="space-y-4 pt-2">
          <p className="flexing_style2">or</p>
          <button
            className="flexing_style2 w-full border border-blue-900 p-3 rounded-md
            hover:bg-blue-900 transition duration-300"
          >
            with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
