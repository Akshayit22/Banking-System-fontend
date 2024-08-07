import './index.css';
import Footer from './components/common/Footer';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Sample from './components/Sample';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Account from './components/user/Account';
import Dashboard from './components/user/Dashboard';
import OpenRoute from './components/auth/OpenRoute';
import PrivateRoute from './components/auth/PrivateRoute';
import NewAccount from './components/user/accountComponets/NewAccount';
import UpdateAccount from './components/user/accountComponets/UpdateAccount';
import UserDetails from './pages/UserDetails';

function App() {

  return (
    <>
      <div>
        <Navbar></Navbar>
        <div className='md:ml-52 pt-16 md:pt-16 min-h-screen'>
          <Routes >
            <Route path='/' element={<Home></Home>}></Route>

            <Route path='/login' element={<OpenRoute><Login /></OpenRoute>}></Route>
            <Route path='/signup' element={<OpenRoute><Signup /></OpenRoute>}></Route>

            <Route path='/sample' element={<Sample />}></Route>

            <Route path='/accounts' element={<PrivateRoute><Account /></PrivateRoute>}></Route>
            <Route path='/new-account' element={<PrivateRoute><NewAccount /></PrivateRoute>}></Route>
            <Route path='/update-account' element={<PrivateRoute><UpdateAccount /></PrivateRoute>}></Route>

            <Route path='/user-details' element={<PrivateRoute><UserDetails /></PrivateRoute>}></Route>
            <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>}></Route>

            <Route path='*' element={<h1 className='text-3xl h-[50vh] font-semibold flex items-center justify-center'>404 Page Not Found</h1>}></Route>
          </Routes>
        </div>


        <Footer></Footer>
      </div>

    </>
  )
}

export default App;
