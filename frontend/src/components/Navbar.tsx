import { Bell, CheckCheck, Menu, Search, UserCircle } from "lucide-react";
import { useState } from "react";
import SignOutModal from "./SignOutModal";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between gap-3 bg-gray-950 p-3 sticky z-50 text-white rounded">
        <div className="">
          <Menu className="cursor-pointer text-gray-400 hover:text-gray-200 transition duration-300" />
        </div>
        <motion.div
          whileFocus={{ scale: 1.02, borderColor: "#6b7280" }}
          whileHover={{ borderColor: "#4b5563" }}
          transition={{ duration: 0.2 }}
          className="hidden md:block w-full max-w-2xl"
        >
          <motion.div
            whileFocus={{ scale: 1.02, borderColor: "#6b7280" }}
            whileHover={{ borderColor: "#4b5563" }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2 bg-gray-900 border border-gray-800 p-2
      rounded-full focus-within:bg-gray-700 transition duration-300"
          >
            <Search />
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search"
              className="outline-none w-full bg-transparent"
            />
          </motion.div>
        </motion.div>
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
          <button>🇺🇿</button>
          <CheckCheck />
          <Bell />
          <UserCircle onClick={() => setOpen(true)} />
        </div>
      </div>
      <SignOutModal open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Navbar;
