
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
            <div className='p-5 bg-white rounded-full w-fit'>
              <MdAccountBalance className='text-5xl '></MdAccountBalance>
            </div>
            <p className='font-semibold text-white '>Bank Balance</p>
          </div>
          <div>
            <div className='p-5 bg-white rounded-full w-fit'>
              <MdCreditCard className='text-5xl '></MdCreditCard>
            </div>
            <p className='font-semibold text-white '>Credit Card</p>
          </div>

          <div>
            <div className='p-5 bg-white rounded-full w-fit'>
              <GiReceiveMoney className='text-5xl '></GiReceiveMoney>
            </div>
            <p className='font-semibold text-white '>Bank Loans</p>
          </div>
          <div>
            <div className='p-5 bg-white rounded-full w-fit'>
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

/*
<div class="relative h-screen w-full">
    <img src="https://images.unsplash.com/photo-1494783367193-149034c05e8f" alt="Background Image" class="absolute inset-0 w-full h-full object-cover filter blur-sm">
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    <div class="absolute inset-0 flex flex-col items-center justify-center">
        <h1 class="text-4xl text-white font-bold">Hello, World!</h1>
        <p class="text-xl text-white mt-4">This is a sample text</p>
    </div>
</div>

//login

<div class="flex h-screen bg-indigo-700">
<div class="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">   
      <header>
        <img class="w-20 mx-auto mb-5" src="https://img.icons8.com/fluent/344/year-of-tiger.png" />
      </header>   
      <form>
        <div>
          <label class="block mb-2 text-indigo-500" for="username">Username</label>
          <input class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="text" name="username">
        </div>
        <div>
          <label class="block mb-2 text-indigo-500" for="password">Password</label>
          <input class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="password" name="password">
        </div>
        <div>          
          <input class="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded" type="submit">
        </div>       
      </form>  
      <footer>
        <a class="text-indigo-700 hover:text-pink-700 text-sm float-left" href="#">Forgot Password?</a>
        <a class="text-indigo-700 hover:text-pink-700 text-sm float-right" href="#">Create Account</a>
      </footer>   
    </div>
</div>

*/