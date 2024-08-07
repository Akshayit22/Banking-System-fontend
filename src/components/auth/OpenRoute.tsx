import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

function OpenRoute({ children }: any) {
        const { token } = useAppSelector((state) => state.auth);
        const navigate = useNavigate();

        return (
                token === null ? children :
                        (
                                <div>
                                        <div className='flex flex-col h-screen items-center gap-5 align-center pt-[15vh] '>
                                                <h1 className='text-[3vh] md:text-[4vh] text-red'>You are already Logged In</h1>
                                                <h2 className='text-[2vh] md:text-[3vh]'>If session is expired then Please Logout.</h2>
                                                <button onClick={() => { navigate('/dashboard') }} className='btn bg-blue-600 text-white  font-semibold px-3 py-1 rounded hover:bg-blue-700 duration-500 md:static w-fit justify-center'>Dashboard</button>
                                        </div>
                                </div>
                        )
        );
}

export default OpenRoute;