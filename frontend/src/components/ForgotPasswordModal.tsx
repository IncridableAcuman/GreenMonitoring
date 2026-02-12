import { AnimatePresence, motion } from "framer-motion";
import { Mail, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  ForgotPasswordSchema,
  type ForgotPasswordFormInput,
} from "../schema/auth.schema";
import { toast } from "react-toastify";
import axiosInstance from "../api/api";

type ForgotPasswordModalProps = {
  forgotPasswordOpen: boolean;
  onClose: () => void;
};

const ForgotPasswordModal = ({
  forgotPasswordOpen,
  onClose,
}: ForgotPasswordModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.input<typeof ForgotPasswordSchema>>({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (value: ForgotPasswordFormInput) => {
    try {
      const { data } = await axiosInstance.post("/forgot-password", value);
      toast.success(data ? data : "Link sent to email");
    } catch (error) {
      toast.error("There was an error resetting the link!");
      console.log(error);
    }
  };

  return (
    <>
      <AnimatePresence>
        {forgotPasswordOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className={`fixed inset-0 bg-black/85 flex items-center justify-center z-50`}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 text-white shadow-lg  rounded-md w-full max-w-lg relative p-6"
            >
              <button
                onClick={onClose}
                className="absolute top-3 right-3 p-1 text-gray-500 cursor-pointer
              hover:text-gray-300 transition duration-300"
              >
                <X />
              </button>
              <h2 className="text-center text-2xl font-semibold py-4">
                Reset Your Password
              </h2>
              <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
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
                  {errors.email && (<span className="text-xs text-red-500">{errors.email.message}</span>)}
                </div>
                <button
                  type="submit"
                  className="w-full bg-linear-to-r from-pink-500 to-purple-600 p-3 rounded-md shadow-md cursor-pointer
           hover:bg-linear-to-r hover:from-purple-600 hover:to-pink-500 transition duration-300 text-white"
                >
                  Reset Password
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ForgotPasswordModal;
