import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { TbListDetails } from "react-icons/tb";
import { toast } from "react-toastify";
import { createAccount } from "../../../services/operations/AccountApi";

function NewAccount() {

        const { register, handleSubmit } = useForm();
        const { token } = useAppSelector((state) => state.auth);

        const navigate = useNavigate();
        const dispatch = useAppDispatch();

        const handleSubmitCreateAccount = (data: any) => {
                console.log(data);
                if (data.accountType == '' || data.balance == '' || data.securityPin == '') {
                        toast.error("Please fill all the details.");
                        return;
                }
                if (data.securityPin.length !== 4) {
                        toast.error("Security Pin must be of 4 digits..");
                        return;
                }
                const balance: number = Number(data.balance);
                if (balance < 500) {
                        toast.error("Minimum balance should be 500.");
                        return;
                }
                dispatch(createAccount(data.accountType, balance, data.securityPin, token, navigate));
        }

        return (
                <div className="flex min-h-screen flex-col mb-20">
                        <div className="mx-auto text-center mt-20">
                                <p className="text-3xl mt text-cyan-600">Enter Account Details </p>
                        </div>
                        <div className="w-full max-w-xs m-auto bg-gradient-to-br from-cyan-400 to-blue-400 rounded p-5 mt-10">
                                <div>
                                        <TbListDetails className="w-20 mx-auto mb-4 text-4xl"></TbListDetails>
                                </div>
                                <form onSubmit={handleSubmit(handleSubmitCreateAccount)}>
                                        <div className='flex flex-row'>
                                                <label className="block mb-1 text-gray-700 mr-4" >Account:</label>
                                                Saving:<input type="radio"  {...register('accountType')} value="Saving" className="w-full text-sky-700 border-b-2 border-sky-500 outline-none focus:bg-gray-300" />
                                                Current:<input type="radio" {...register('accountType')} value="Current" className="w-full text-sky-700 border-b-2 border-sky-500 outline-none focus:bg-gray-300" />
                                        </div>

                                        <div>
                                                <label className="block mb-2 text-gray-700" >Balance :</label>
                                                <input type="number" id="balance" {...register('balance')} className="w-full p-2 mb-6 text-sky-700 border-b-2 border-sky-500 outline-none focus:bg-gray-300" />
                                        </div>
                                        <div>
                                                <label className="block mb-2 text-gray-700">Security Pin : {"(4 digit)"}</label>
                                                <input type="number" id="securityPin" {...register('securityPin')} className="w-full p-2 mb-6 text-sky-700 border-b-2 border-sky-500 outline-none focus:bg-gray-300" />
                                        </div>
                                        <div>
                                                <button className="w-full bg-blue-700 hover:cursor-pointer hover:bg-blue-600 text-white font-bold py-2 px-4 mb-6 rounded" type="submit" >Create Account</button>
                                        </div>
                                </form>
                                <div>
                                        <a className="text-indigo-700 hover:text-sky-800 text-sm float-right" href="/accounts">Cancel</a>
                                </div>

                        </div>
                </div>
        )
}

export default NewAccount