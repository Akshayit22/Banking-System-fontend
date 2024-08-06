import { useAppDispatch, useAppSelector } from "../../redux/hooks";




function Dashboard() {

    const dispatch = useAppDispatch();

    const { name } = useAppSelector((state) => state.auth);
    const { accounts, account } = useAppSelector((state) => state.account);

    console.log(account);
    console.log(accounts);

    return (
        <div>Dashboard
            <h1>{name}</h1>
            {
                // accounts?.map((acc, index) => {
                //     <div key={index}>
                //         <h2>{acc.accontNumber}</h2>
                //     </div>
                // })
            }
        </div>
    )
}

export default Dashboard