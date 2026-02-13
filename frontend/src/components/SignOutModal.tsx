import { AnimatePresence, motion } from "framer-motion";
import {Info, X } from "lucide-react";
import { toast } from "react-toastify";
import axiosInstance from "../api/api";
import { useNavigate } from "react-router-dom";
import { UseLoader } from "../contexts/LoaderProvider";

type SignOutModalProps = {
  open: boolean;
  onClose: () => void;
};

const SignOutModal = ({ open, onClose }: SignOutModalProps) => {
  const navigate = useNavigate();
  const { startLoading,stopLoading} = UseLoader();


  const onSubmit = async () => {
    startLoading();
    try {
      const {data} = await axiosInstance.post("/auth/logout");
      localStorage.removeItem("accessToken");
      toast.success(data);
      await new Promise(resolve=>setTimeout(resolve,2000));
      navigate("/auth");
    } catch (error) {
      console.log(error);
      toast.error("Sign Out failed!");
    } finally {
      stopLoading();
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`fixed inset-0 flex items-center justify-center bg-black/60 z-50`}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className={`bg-gray-800 w-full max-w-md shadow-md rounded-md relative p-6`}
          >
            <button className="absolute top-3 right-3 p-1 cursor-pointer text-gray-500 hover:text-gray-300 transition duration-300">
              <X/>
            </button>
            <Info size={56} className="text-pink-800 text-center mx-auto" />
            <div className="text-center py-4 text-white">
              <h2 className="text-3xl font-black">Confirm Logout</h2>
              <p>Are you sure you want to log out?</p>
            </div>
            <div className="flex items-center gap-3 pt-4">
              <button onClick={onClose} className="bg-gray-700 w-full text-white px-5 py-2.5 shadow-md rounded-md cursor-pointer hover:bg-gray-600 transition duration-300">Cancel</button>
              <button onClick={() => onSubmit()} className="bg-red-500 w-full text-white px-5 py-2.5 rounded-md shadow-md cursor-pointer hover:bg-red-400 transition duration-300">Yes</button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SignOutModal;
