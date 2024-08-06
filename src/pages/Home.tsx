
import img from '../assets/home.jpg';


function Home() {
  return (
    <div className="min-h-[93vh] flex justify-center items-center bg-gradient-to-r from-gray-400 to to-gray-700">
      <div className="flex flex-wrap m-auto">
        <img src={img} className=" w-[65%]" />
        <div className=" w-[35%]"></div>

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