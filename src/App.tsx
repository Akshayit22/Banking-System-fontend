import './index.css';
import Footer from './pages/Footer';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Sample from './components/Sample';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Account from './components/user/Account';
import Dashboard from './components/user/Dashboard';

function App() {

  return (
    <>
      <div>
        <Navbar></Navbar>
        <div className='md:ml-56 pt-16 md:pt-16 md:p-3 min-h-screen'>
          <Routes >
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/sample' element={<Sample />}></Route>
            <Route path='/accounts' element={<Account />}></Route>
            <Route path='/dashboard' element={<Dashboard />}></Route>
            <Route path='*' element={<h1>404 Page Not Found</h1>}></Route>
          </Routes>
        </div>


        <Footer></Footer>
      </div>

    </>
  )
}

export default App;
