import {Routes,Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import Auth from './pages/Auth';
import ResetPassword from './pages/ResetPassword';
import Layout from './layout/Layout';
const App = () => {
  return (
    <>
    <ToastContainer/>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>} />
      </Route>
      <Route path='/auth' element={<Auth/>} />
      <Route path='/reset-password' element={<ResetPassword/>} />
    </Routes>
    </>
  )
}

export default App