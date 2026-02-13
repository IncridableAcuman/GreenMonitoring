import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import ResetPassword from "./pages/ResetPassword";
import Layout from "./layout/Layout";
import PrivateRoute from "./guards/PrivateRoute";
import Loader from "./components/Loader";
import { UseLoader } from "./contexts/LoaderProvider";
const App = () => {
  const { isLoading } = UseLoader();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Route>
        <Route path="/auth" element={<Auth />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </>
  );
};

export default App;
