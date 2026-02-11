import { AnimatePresence, motion } from "framer-motion";
import { Mail, X } from "lucide-react";
type ForgotPasswordModalProps = {
  forgotPasswordOpen: boolean;
  onClose: () => void;
};

const ForgotPasswordModal = ({
  forgotPasswordOpen,
  onClose,
}: ForgotPasswordModalProps) => {
  return (
    <>
      <AnimatePresence>
        {forgotPasswordOpen && (
          <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}

          className={`fixed inset-0 bg-black/60 flex items-center justify-center z-50`}>
            <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="bg-gray-100 shadow-md rounded-md w-full max-w-lg relative p-6"
            >
              <button onClick={onClose} className="absolute top-3 right-3 p-1 text-gray-500 cursor-pointer
               hover:bg-gray-50 hover:text-gray-300 transition duration-300">
                <X />
              </button>
              <h2 className="text-center text-2xl font-semibold py-4">Reset Your Password</h2>
              <form className="space-y-4">
                <div className="flex items-center gap-2 border  p-3 rounded-md">
                  <Mail />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your email"
                    className="w-full outline-none bg-transparent"
                  />
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
