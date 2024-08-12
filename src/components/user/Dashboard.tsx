import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";




function Dashboard() {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { name, token, accountNumber } = useAppSelector((state) => state.auth);
    const { account } = useAppSelector((state) => state.account);

    return account == null ?
        (
            <div className="flex flex-col min-h-[50vh] justify-center items-center">
                <h1 className="text-2xl font-extralight">Account Not Selected.</h1>
                <h1 className="text-1xl font-extralight">Please select Account.</h1>
                <p className="text-blue-700 hover:cursor-pointer" onClick={() => navigate('/accounts')}>Click Here</p>
            </div>
        )
        :
        (
            <div className="overflow-x-hidden">Dashboard
                <h1>{name}</h1>
                <h1>{token}</h1>
                <h1>{accountNumber}</h1>
                <h2>{account?.accountType}</h2>
            </div>
        )
}

export default Dashboard