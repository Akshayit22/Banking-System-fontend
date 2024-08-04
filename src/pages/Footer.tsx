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
      <div className="w-full bg-cyan-500">
        <ul className="grid grid-cols-2 grid-rows-4 items-center text-center p-2 gap-3">
          {
            navItems.map((item) =>
              <li onClick={() => navigate(item.link)} className="hover:cursor-pointer">{item.name}</li>
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