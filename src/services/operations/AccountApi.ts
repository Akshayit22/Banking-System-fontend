import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { accountEndpoints } from "../apis";
import { setAccounts } from "../../redux/slices/accountSlice";

const { ACCOUNT_API, ACCOUNT_INFO_API } = accountEndpoints;

export function getAccounts(token: any | string) {
    return async (dispatch: any) => {
        const toastId = toast.loading("Getting Accounts Details..");
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

export function createAccount(accountType: string, balance: number, securityPin: string, token: any | string, navigate: any) {
    return async (dispatch: any) => {
        const toastId = toast.loading("Getting Account Details..");
        try {
            const response = await apiConnector("POST", ACCOUNT_API, { accountType, balance, securityPin }, {
                Authorization: `Bearer ${token}`,
            })
            console.log(ACCOUNT_API + "Create ACCOUNT_API response.............", response.data)

            dispatch(getAccounts(token));
            toast.success("Account Created Successfully.")
            navigate("/accounts");
        }
        catch (error: any) {
            console.log("Create ACCOUNT_API error .........", error);
            const message = error?.response?.data?.messageString;
            message ? toast.error(error.response.data.messageString) : toast.error("Internal Server error");
        }
        toast.dismiss(toastId);
    }
}

export function updateAccountService(accountNumber: number, accountType: string, balance: number, securityPin: string, token: any | string, navigate: any) {
    return async (dispatch: any) => {
        const toastId = toast.loading("Getting Account Details..");
        try {
            const response = await apiConnector("PUT", ACCOUNT_API, { accountNumber, accountType, balance, securityPin }, {
                Authorization: `Bearer ${token}`,
            })
            console.log(ACCOUNT_API + "Update ACCOUNT_API response.............", response.data)


            dispatch(getAccounts(token));
            toast.success("Account Updated Successfully.")
            navigate("/accounts");
        }
        catch (error: any) {
            console.log("Update ACCOUNT_API error .........", error);
            const message = error?.response?.data?.messageString;
            message ? toast.error(error.response.data.messageString) : toast.error("Internal Server error");
        }
        toast.dismiss(toastId);
    }
}

export function getAccountDetails(accountNumber: number | any, token: any | string) {
    return async (dispatch: any) => {
        const toastId = toast.loading("Getting Account Details..");
        try {
            const response = await apiConnector("GET", ACCOUNT_INFO_API + `/${accountNumber}`, {}, {
                Authorization: `Bearer ${token}`,
            })
            console.log(ACCOUNT_INFO_API + "ACCOUNT_INFO_API response.............", response.data)

            const data = response.data;
            //dispatch(setAccounts(data));

        }
        catch (error: any) {
            console.log("ACCOUNT_INFO_API error .........", error);
            const message = error?.response?.data?.messageString;
            message ? toast.error(error.response.data.messageString) : toast.error("Internal Server error");
        }
        toast.dismiss(toastId);
    }
}