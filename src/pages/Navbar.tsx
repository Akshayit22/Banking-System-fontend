import { useEffect, useState } from "react"
import { BsBank } from "react-icons/bs"
import { MdMenu, MdClose, MdLogout, MdNotifications, MdLogin } from "react-icons/md"
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { logout } from "../services/operations/AuthApi";

function Navbar() {

  const [open, setOpen] = useState(false);
  const { token } = useSelector((state: any) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const toggle = () => {
    setOpen(!open);
  }

  const logoutHandler = () => {
    dispatch(logout(navigate, dispatch));
  }

  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'Dashboard', link: '/Dashboard' },
    { name: 'accounts', link: '/accounts' },
    { name: 'signup', link: '/signup' },
    { name: 'login', link: '/login' },
    { name: 'sample', link: '/sample' }
  ]

  useEffect(() => {
    setOpen(false);
  }, [location])

  return (
    <div className="fixed w-full">
      <div className="h-16 bg-gradient-to-r from-cyan-600 to-blue-500 flex flex-row justify-between z-10 border-b-2 border-black">

        <div className="flex flex-row items-center">

          {
            open ? <MdClose className="text-4xl ml-2 mt-2 bg-cyan-500 rounded-md hover:cursor-pointer md:hidden duration-500" onClick={toggle}></MdClose>
              : <MdMenu className="text-4xl ml-2 mt-2 bg-cyan-500 rounded-md hover:cursor-pointer md:hidden duration-500" onClick={toggle}></MdMenu>
          }

          <BsBank className='text-4xl ml-2 mt-1'></BsBank>
          <p className="text-2xl mt-1 ml-2 font-semibold hover:cursor-pointer" onClick={() => navigate('/')}>Online Banking</p>

        </div>

        <div className="flex mt-2 hover:cursor-pointer">

          {
            token == null ?
              (
                <div className="flex p-1" onClick={() => navigate('/login')}>
                  <p className="text-1xl mt-2 font-bold mr-1 ">Login</p>
                  <MdLogin className='text-2xl mt-2 '></MdLogin>
                </div>
              )
              : (
                <div>
                  <div className="flex p-1" onClick={logoutHandler}>
                    <p className="text-1xl mt-2 font-bold mr-1">Logout</p>
                    <MdLogout className='text-2xl mt-2'></MdLogout>
                  </div>
                </div>
              )

          }
        </div>

      </div>
      <div className={`w-48 md:w-52 h-[93vh] bg-gradient-to-r from-cyan-700 to-blue-500 flex pl-5 pt-2 absolute ${!open ? 'hidden' : ''} md:block border-r-2 border-black`}>
        <ul>
          {
            navItems.map((item, index) =>
              <li onClick={() => navigate(item.link)} key={index}
                className="p-1 m-1 text-2xl rounded-md hover:shadow-md hover:cursor-pointer hover:font-semibold"
              >{item.name}</li>
            )
          }

        </ul>
      </div>

    </div>
  )
}

export default Navbar