import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { userEndpoints } from "../apis";

const { USER_INFO, USER_ADDRESS_API, USER_API, USER_DETAILS_API } = userEndpoints;


export function userInfo(token: any | string) {
    return async (dispatch: any) => {
        const toastId = toast.loading("Getting Account Details..");
        try {
            console.log(token, "------>", USER_INFO)
            const response = await apiConnector("GET", USER_INFO, {}, {
                "Content-Type": "multipart/form-data",
                Authorisation: `Bearer ${token}`,
            })

            console.log("USER_INFO response.............", response)

        }
        catch (error) {
            console.log("USER_INFO error ........", error);
            toast.error("Internal server error, try again later.")
        }
        toast.dismiss(toastId);
    }
}
