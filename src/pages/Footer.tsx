import { useNavigate } from "react-router-dom"

function Footer() {

  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'Dashboard', link: '/Dashboard' },
    { name: 'account', link: '/account' },
    { name: 'contact', link: '/contact' },
    { name: 'career', link: '/career' }
  ]

  return (
    <div className='md:ml-52'>
      <div className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 border-t-2 border-black">
        <ul className="grid grid-cols-2 grid-rows-4 items-center text-center p-2 gap-3 pt-7">
          {
            navItems.map((item, index) =>
              <li onClick={() => navigate(item.link)} key={index} className="hover:cursor-pointer hover:font-semibold">{item.name}</li>
            )
          }
        </ul>
      </div>
      <div>
      </div>

    </div>
  )
}

export default Footer