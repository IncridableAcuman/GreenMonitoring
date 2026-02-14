import { Loader2 } from "lucide-react";
import { UseLoader } from "../contexts/LoaderProvider";

const Loader = () => {
    const {isLoading} = UseLoader();

    if(!isLoading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/90 text-whitez w-full h-screen">
      <Loader2 className="h-8 w-8 text-green-500 animate-spin" />
    </div>
  );
};

export default Loader;
