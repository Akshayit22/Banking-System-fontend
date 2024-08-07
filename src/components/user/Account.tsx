import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { getAccounts } from "../../services/operations/AccountApi";
import { MdAddCircle, MdCurrencyRupee } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { setUpdateAccount } from "../../redux/slices/accountSlice";


function Account() {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { name } = useAppSelector(state => state.auth);
    const { accounts } = useAppSelector((state) => state.account);

    useEffect(() => {
        if (accounts == null) {
            dispatch(getAccounts(localStorage.getItem('token')));
        }
    }, []);

    const handleUseAccount = (acc: any) => {
        console.log(acc);
    }

    const handleUpdate = (acc: any) => {
        dispatch(setUpdateAccount(acc));
        navigate('/update-account');
    }

    return (
        <div className="flex flex-col gap-10 p-3 m-2 mx-auto items-center max-w-full">
            <h1 className="text-3xl font-semibold flex flex-wrap ">Welcome,<p className="text-gray-950">{" " + name}</p></h1>

            <div className="flex p-3 bg-cyan-300 rounded-md gap-5 w-fit hover:cursor-pointer" onClick={() => navigate('/new-account')}>
                <p className="font-semibold md:text-2xl">Create New Account </p>
                <MdAddCircle className="text-3xl hover:cursor-pointer" />

            </div>

            <div className="flex flex-col items-center">
                <p className="text-2xl font-semibold">Your accounts</p>

                {
                    accounts?.length != 0 &&
                    (
                        <div className="flex gap-3 bg-cyan-500 m-1 p-2 rounded-md">
                            <div className="">
                                <p className="text-1xl font-semibold">Index</p>
                            </div>
                            <p className="text-1xl font-semibold">Account Type</p>
                            <p className="text-1xl font-semibold">Account Number</p>
                            <p className="text-1xl font-semibold flex"><MdCurrencyRupee className="mt-1"></MdCurrencyRupee>Balance</p>
                        </div>
                    )
                }

                {


                    accounts != null &&
                    accounts.map((acc: any, index: number) => (
                        <div key={index} className="gap-3 bg-cyan-500 rounded-md m-2 w-full">

                            <div className="flex justify-between p-3">
                                <div className="bg-cyan-600 rounded-full px-3 py-1">
                                    <p className="md:text-2xl">{index + 1}</p>
                                </div>
                                <p className="font-semibold md:text-2xl py-1">{acc.accountType}</p>
                                <p className="font-semibold md:text-2xl py-1">{acc.accountNumber}</p>
                                <p className="font-semibold md:text-2xl flex py-1"><MdCurrencyRupee className="mt-1"></MdCurrencyRupee>{acc.balance}</p>
                            </div>
                            <div className="flex justify-between mb-2 p-2 gap-3">
                                <button className="bg-blue-500 hover:cursor-pointer hover:bg-blue-600 text-white rounded-md px-3 py-1 md:text-xl" onClick={() => handleUseAccount(acc)}>Use Account</button>
                                <button className="bg-blue-500 hover:cursor-pointer hover:bg-blue-600 text-white rounded-md px-3 py-1 md:text-xl" onClick={() => handleUpdate(acc)}>Change Pin </button>
                            </div>
                        </div>
                    ))

                }
                {
                    accounts?.length == 0 &&
                    (
                        <div className="p-3 m-2">
                            <p className="font-extralight text-2xl">No Account Exist for You.</p>
                        </div>
                    )
                }
            </div>

        </div>
    )
}

export default Account
