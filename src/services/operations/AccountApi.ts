import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { accountEndpoints } from "../apis";
import { setAccount, setAccounts } from "../../redux/slices/accountSlice";

const { ACCOUNT_API } = accountEndpoints;

export function getAccounts(token: any | string) {
    return async (dispatch: any) => {
        const toastId = toast.loading("Getting Account Details..");
        try {
            const response = await apiConnector("GET", ACCOUNT_API, {}, {
                Authorization: `Bearer ${token}`,
            })
            console.log(ACCOUNT_API + "ACCOUNT_API response.............", response.data)

            const data = response.data;
            dispatch(setAccounts(data));
            console.log("data is set.")

        }
        catch (error: any) {
            console.log("ACCOUNT_API error .........", error);
            const message = error?.response?.data?.messageString;
            message ? toast.error(error.response.data.messageString) : toast.error("Internal Server error");
        }
        toast.dismiss(toastId);
    }
}
