
import { useNavigate } from 'react-router-dom';
import img from '../assets/home.jpg';
import { useAppSelector } from '../redux/hooks';
import { MdAccountBalance, MdCreditCard, MdLock, MdMoney } from 'react-icons/md';
import { GiReceiveMoney } from 'react-icons/gi';




function Home() {

  const { token, name } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  return (
    <div className="min-h-[93vh] flex flex-col justify-center md:items-center bg-gradient-to-r from-gray-400 to to-gray-700">
      <div className="md:flex md:m-auto">
        <img src={img} className=" md:w-[65%]" />
        <div className="md:w-[35%]">
          {
            token === null ?
              (
                <div className="w-full h-full text-white flex flex-col items-center justify-center my-auto">
                  <p className='text-3xl p-3  font-extralight'>Welcome <span className=''>{"  " + "to Online Banking"}</span></p>
                  <p className='p-3 text-2xl font-extralight'>Banking at your fingurtips</p>
                  <div className='flex gap-5 m-3'>
                    <button className='px-4 py-4 bg-black font-bold flex gap-3 hover:cursor-pointer hover:bg-gray-400 duration-500 hover:text-gray-800' onClick={() => navigate('/login')}><MdLock className=' text-2xl'></MdLock>Login</button>
                    <button className='px-4 py-2 font-bold hover:cursor-pointer hover:bg-black duration-500' onClick={() => navigate('/signup')}>SignUp</button>
                  </div>
                </div>
              ) :
              (
                <div className="w-full h-full text-white flex flex-col items-center justify-center my-auto">
                  <p className='text-3xl p-3  font-extralight'>Welcome <span className=''>{"  " + name == null ? name : ""}</span></p>
                  <p className='p-3 text-2xl font-extralight'>Banking at your fingurtips</p>
                  <p className='p-3 text-2xl font-semibold'>You can access you account</p>
                  <div className='flex gap-5 m-3'>
                    <button className='px-4 py-4 bg-black font-bold flex gap-3 hover:cursor-pointer hover:bg-gray-400 duration-500 hover:text-gray-800' onClick={() => navigate('/dashboard')}><MdLock className=' text-2xl'></MdLock>Dashboard</button>
                    <button className='px-4 py-2 font-bold hover:cursor-pointer hover:bg-black duration-500' onClick={() => navigate('/accounts')}>Accounts</button>
                  </div>
                </div>
              )
          }
        </div>
      </div>

      <div className='flex flex-col flex-wrap gap-5 justify-center m-5 p-5'>
        <div className='text-center'>
          <p className='font-semibold text-2xl'>What can we help you find?</p>
        </div>
        <div className='flex flex-wrap gap-5 justify-center m-3 p-3'>

          <div className=''>
            <div className='p-5 bg-white rounded-full w-fit hover:bg-gray-300 duration-500'>
              <MdAccountBalance className='text-5xl '></MdAccountBalance>
            </div>
            <p className='font-semibold text-white '>Bank Balance</p>
          </div>
          <div>
            <div className='p-5 bg-white rounded-full w-fit hover:bg-gray-300 duration-500'>
              <MdCreditCard className='text-5xl '></MdCreditCard>
            </div>
            <p className='font-semibold text-white '>Credit Card</p>
          </div>

          <div>
            <div className='p-5 bg-white rounded-full w-fit hover:bg-gray-300 duration-500'>
              <GiReceiveMoney className='text-5xl '></GiReceiveMoney>
            </div>
            <p className='font-semibold text-white '>Bank Loans</p>
          </div>
          <div>
            <div className='p-5 bg-white rounded-full w-fit hover:bg-gray-300 duration-500'>
              <MdMoney className='text-5xl '></MdMoney>
            </div>
            <p className='font-semibold text-white '>Interest Rate</p>
          </div>

        </div>
      </div>



    </div>
  )
}

export default Home;