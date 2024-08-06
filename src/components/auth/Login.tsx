import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { BsBank } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppDispatch } from "../../redux/hooks";
import { login } from '../../services/operations/AuthApi';
import { setName } from '../../redux/slices/authSlice';

function Login() {

    const { register, handleSubmit, reset,
        formState: { isSubmitSuccessful }
    } = useForm();

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({
                password: "",
            })
        }
    }, [isSubmitSuccessful, reset]);

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleSubmitLogin = (data: any) => {
        console.log(data);
        if (data.email === '' || data.password === '') {
            toast.error('please fill the details');
            return;
        }
        else if (!data.userName.includes('@') || !data.userName.includes('.')) {
            toast.error('Enter valide Email Address.');
            return;
        }
        else if (data.password.length < 8) {
            toast.error('Password Length must be atleast 8 charcters.');
            return;
        }
        dispatch(setName(data.userName));
        dispatch(login(data.userName, data.password, navigate));
    }



    return (
        <div className="flex min-h-screen flex-col">
            <div className="mx-auto text-center mt-20">
                <p className="text-3xl mt text-cyan-600">Welcome, to Login page</p>
            </div>
            <div className="w-full max-w-xs m-auto bg-gradient-to-br from-cyan-400 to-blue-400 rounded p-5 mt-10">
                <div>
                    <BsBank className="w-20 mx-auto mb-5 text-4xl"></BsBank>
                </div>
                <form onSubmit={handleSubmit(handleSubmitLogin)}>
                    <div>
                        <label className="block mb-2 text-gray-700" >Username</label>
                        <input type="email" id="email" {...register('userName')} className="w-full p-2 mb-6 text-sky-700 border-b-2 border-sky-500 outline-none focus:bg-gray-300" />
                    </div>
                    <div>
                        <label className="block mb-2 text-gray-700">Password</label>
                        <input type="password" id="password" {...register('password')} className="w-full p-2 mb-6 text-sky-700 border-b-2 border-sky-500 outline-none focus:bg-gray-300" />
                    </div>
                    <div>
                        <button className="w-full bg-blue-700 hover:cursor-pointer hover:bg-blue-600 text-white font-bold py-2 px-4 mb-6 rounded" type="submit" >Login</button>
                    </div>
                </form>
                <div>
                    <a className="text-indigo-700 hover:text-sky-800 text-sm float-left" href="#">Forgot Password?</a>
                    <a className="text-indigo-700 hover:text-sky-800 text-sm float-right" href="/signup">Create Account</a>
                </div>
            </div>
        </div>
    )
}

export default Login