import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { getAccounts } from "../../services/operations/AccountApi";
import { MdAddCircle } from "react-icons/md";

function Account() {

    const dispatch = useAppDispatch();

    const { name } = useAppSelector(state => state.auth);
    const { accounts } = useAppSelector(state => state.account);

    useEffect(() => {
        if (accounts == null) {
            dispatch(getAccounts(localStorage.getItem('token')));
        }
        console.log(accounts);
    }, []);



    return (
        <div className="flex flex-col gap-10 p-3 m-2 mx-auto items-center">
            <h1 className="text-3xl font-semibold flex flex-wrap ">Welcome,<p className="text-gray-950">{" " + name}</p></h1>

            <div className="flex p-3 bg-cyan-300 rounded-md gap-5 w-fit">
                <p className="font-semibold md:text-2xl">Create New Account </p>
                <MdAddCircle className="text-3xl hover:cursor-pointer" />

            </div>

            <div>
                <p className="text-2xl font-semibold">Your accounts</p>
                {
                    accounts?.length > 0 &&
                    accounts.map((account: any, index: number) => {
                        <div key={index}>
                            <p>{index}</p>
                            <p>{account.accountType}</p>
                            <p> {account.accountNumber}</p>
                            <p>{account.balance}</p>
                        </div>
                    })
                }
                {
                    accounts == null &&
                    (
                        <p className="mt-10 text-2xl font-semibold">No Account Exists. </p>
                    )
                }
            </div>

        </div>
    )
}

export default Account