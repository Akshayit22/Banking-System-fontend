import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { getAccounts } from "../../services/operations/AccountApi";

function Account() {

    const dispatch = useAppDispatch();

    const { name } = useAppSelector(state => state.auth);
    const accounts = useAppSelector(state => state.account.accounts);

    useEffect(() => {
        console.log(accounts);
        if (accounts == null) {
            dispatch(getAccounts(localStorage.getItem('token'), dispatch));
        }
    }, [])

    return (
        <div>
            <h1>Welcome,{" " + name}</h1>
            <p>Your accounts</p>
            {
                accounts.map((account: any, index: number) => {
                    <div key={index}>
                        <h1>{account.accountNumber}</h1>
                        <h3>{account.accountType}</h3>
                    </div>
                })
            }
        </div>
    )
}

export default Account