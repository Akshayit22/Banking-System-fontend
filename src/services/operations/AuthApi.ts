import { toast } from "react-toastify";
import { apiConnector } from "../apiConnector";
import { authEndpoints } from "../apis";

const { LOGIN_API, SIGNUP_API } = authEndpoints;

export function signUp(email: string, password: string) {
    return async (dispatch: any) => {
        try {

            console.log(email, "--", password, "------>", SIGNUP_API)

            const response = await apiConnector("POST", SIGNUP_API, {
                email,
                password,
            })

            console.log("SIGNUP_API response ............", response);


        }
        catch (error) {
            console.log("SIGNUP_API error .........", error);
            toast.error("Internal server error, try again later.");
        }

    }
}

export function login(email: string, password: string) {
    return async (dispatch: any) => {
        try {
            console.log(email, "--", password, "------>", LOGIN_API)
            const response = await apiConnector("POST", LOGIN_API, {
                email, password
            })
            console.log("LOGIN_API response ...........", response);


        } catch (error) {
            console.log("LOGIN_API error .........", error);
            toast.error("Internal server error, try again later.");
        }
    }
}

export function logout(navigate: any) {
    return (dispatch: any) => {
        // dispatch(setToken(null))
        // dispatch(setUser(null))
        // dispatch(resetCart())
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        toast.success("Logged Out")
        navigate("/")
    }
}