import { toast } from "react-toastify";
import { apiConnector } from "../apiConnector";
import { userEndpoints } from "../apis";

const { USER_INFO, USER_ADDRESS_API, USER_API, USER_DETAILS_API } = userEndpoints;


export const userInfo = async (token: string) => {
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
}

// export function userInfo() {
//     return (dispatch: any) => {

//         const response = await apiConnector("GET", USER_INFO, {}, {
//             "Content-Type": "multipart/form-data",
//             Authorisation: `Bearer ${token}`,
//         })

//     }
// }
