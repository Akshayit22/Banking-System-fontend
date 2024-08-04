import { useEffect, useState } from "react"
import { BsBank } from "react-icons/bs"
import { MdMenu, MdClose, MdLogout, MdNotifications } from "react-icons/md"
import { useLocation, useNavigate } from "react-router-dom";
function Navbar() {

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggle = () => {
    setOpen(!open);
  }

  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'Dashboard', link: '/Dashboard' },
    { name: 'account', link: '/account' },
    { name: 'contact', link: '/contact' },
    { name: 'career', link: '/career' }
  ]

  useEffect(() => {
    location.pathname
  })

  return (
    <div className="fixed w-full">
      <div className="h-16 bg-cyan-600 flex flex-row justify-between z-10 border-b-2 border-black">

        <div className="flex flex-row items-center">

          {
            open ? <MdClose className="text-4xl ml-2 mt-2 bg-cyan-800 rounded-md hover:bg-cyan-900 md:hidden" onClick={toggle}></MdClose>
              : <MdMenu className="text-4xl ml-2 mt-2 bg-cyan-800 rounded-md hover:bg-cyan-900 md:hidden" onClick={toggle}></MdMenu>
          }

          <BsBank className='text-4xl ml-4 mt-1'></BsBank>
          <p className="text-2xl mt-1 ml-2 font-semibold hover:cursor-pointer" onClick={() => navigate('/')}>Online Banking</p>

        </div>

        <div className="flex mt-3">
          <MdNotifications className='text-3xl mr-4 mt-2 hover:cursor-pointer'></MdNotifications>
          <MdLogout className='text-3xl mr-4 mt-2 hover:cursor-pointer'></MdLogout>

        </div>

      </div>
      <div className={`w-48 md:w-52 h-[93vh] bg-cyan-600 flex pl-5 pt-2 absolute ${!open ? 'hidden' : ''} md:block border-r-2 border-black`}>
        <ul>
          {
            navItems.map((item) =>
              <li onClick={() => navigate(item.link)}
                className="p-1 m-1 text-2xl rounded-md hover:bg-cyan-700 hover:cursor-pointer"
              >{item.name}</li>
            )
          }

        </ul>
      </div>

    </div>
  )
}

export default Navbar