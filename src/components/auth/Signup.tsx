import { useForm } from 'react-hook-form';
import { BsBank } from 'react-icons/bs'
import { toast } from 'react-toastify';
import { signUp } from '../../services/operations/AuthApi';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from "../../redux/hooks";
import { setName } from '../../redux/slices/authSlice';

function Signup() {

    const { register, handleSubmit } = useForm();

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleSubmitSignup = (data: any) => {
        console.log(data);

        if (data.userName === '' || data.name === '' || data.password === '' || data.confirmPassword === '') {
            toast.error('please fill the details');
            return;
        }
        else if (!data.userName.includes('@') || !data.userName.includes('.')) {
            toast.error('Enter valide Email Address.');
            return;
        }
        else if (data.password !== data.confirmPassword) {
            toast.error('Passwords not matching.');
            return;
        }
        else if (data.password.length < 8) {
            toast.error('Password Length must be atleast 8 charcters.');
            return;
        }
        const age: number = Number(data.age);
        if (age < 18 || age > 100) {
            toast.error('Invalide age. should be greated 18.');
            return;
        }
        if (data.mobile.length == 10) {
            toast.error('Invalide Mobile Number.');
            return;
        }
        if (data.gender == null) {
            toast.error('Please Select Gender.');
            return;
        }
        dispatch(setName(data.name));

        dispatch(signUp(data.userName, data.password, data.name, data.mobile, data.gender, data.age));

        navigate('/login');
    }

    return (
        <div className="flex min-h-screen flex-col mb-10">
            <div className="mx-auto text-center mt-5">
                <p className="text-2xl mt text-cyan-600">Welcome, to SignUp page</p>
            </div>
            <div className="w-full max-w-xs m-auto bg-gradient-to-br from-cyan-400 to-blue-400 rounded p-5 mt-5">
                <div>
                    <BsBank className="w-20 mx-auto mb-4 text-4xl"></BsBank>
                </div>
                <form onSubmit={handleSubmit(handleSubmitSignup)}>
                    <div>
                        <label className="block mb-1 text-gray-700" >Name</label>
                        <input type="text" id="Name" {...register('name')} className="w-full p-2 mb-4 text-sky-700 border-b-2 border-sky-500 outline-none focus:bg-gray-300" />
                    </div>
                    <div>
                        <label className="block mb-1 text-gray-700" >Email/Username</label>
                        <input type="email" id="email" {...register('userName')} className="w-full p-2 mb-4 text-sky-700 border-b-2 border-sky-500 outline-none focus:bg-gray-300" />
                    </div>
                    <div>
                        <label className="block mb-1 text-gray-700" >Mobile</label>
                        <input type="text" id="mobile" {...register('mobile')} className="w-full p-2 mb-4 text-sky-700 border-b-2 border-sky-500 outline-none focus:bg-gray-300" />
                    </div>

                    <div className='flex flex-row'>
                        <label className="block mb-1 text-gray-700 mr-4" >Gender: </label>
                        Male:<input type="radio"  {...register('gender')} value="MALE" className="w-full text-sky-700 border-b-2 border-sky-500 outline-none focus:bg-gray-300" />
                        Female:<input type="radio" {...register('gender')} value="FEMALE" className="w-full text-sky-700 border-b-2 border-sky-500 outline-none focus:bg-gray-300" />
                    </div>

                    <div>
                        <label className="block mb-1 text-gray-700" >Age</label>
                        <input type="number" id="age" {...register('age')} className=" p-2 mb-4 text-sky-700 border-b-2 border-sky-500 outline-none focus:bg-gray-300" />
                    </div>

                    <div>
                        <label className="block mb-1 text-gray-700" >Password</label>
                        <input type="password" id="password" {...register('password')} className="w-full p-2 mb-4 text-sky-700 border-b-2 border-sky-500 outline-none focus:bg-gray-300" />
                    </div>
                    <div>
                        <label className="block mb-1 text-gray-700">Confirm Password</label>
                        <input type="password" id="Cpassword" {...register('confirmPassword')} className="w-full p-2 mb-6 text-sky-700 border-b-2 border-sky-500 outline-none focus:bg-gray-300" />
                    </div>
                    <div>
                        <button className="w-full bg-blue-700 hover:cursor-pointer hover:bg-blue-600 text-white font-bold py-2 px-4 mb-6 rounded" type="submit" >Sign Up</button>
                    </div>
                </form>
                <div>
                    <a className="text-indigo-700 hover:text-sky-800 text-sm float-left">Welcome</a>
                    <a className="text-indigo-700 hover:text-sky-800 text-sm float-right" href="/login">Login</a>
                </div>
            </div>
        </div>
    )
}

export default Signup