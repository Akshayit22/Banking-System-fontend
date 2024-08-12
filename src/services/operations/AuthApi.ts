import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { authEndpoints } from "../apis";
import { clearAuthSlice, setToken } from "../../redux/slices/authSlice";
import { clearUserSlice } from "../../redux/slices/userSlice";
import { clearAccountSlice } from "../../redux/slices/accountSlice";
const { LOGIN_API, SIGNUP_API } = authEndpoints;

export function signUp(userName: string, password: string, name: string, mobile: string, gender: string, age: number) {
    return async () => {
        const toastId = toast.loading("Sending Request to Server...");
        try {
            console.log(userName, "--", password, "------>", SIGNUP_API)

            const response = await apiConnector("POST", SIGNUP_API, {
                userName, password, name, mobile, gender, age
            })

            console.log("SIGNUP_API response ............", response);
            if (response.status == 201) {
                toast.success("Sign Up successful, login now.")
            }

        }
        catch (error: any) {
            console.log("SIGNUP_API error .........", error);
            const message = error?.response?.data?.messageString;
            message ? toast.error(error.response.data.messageString) : toast.error("Internal Server error");
        }
        toast.dismiss(toastId);
    }
}

export function login(userName: string, password: string, navigate: any) {
    return async (dispatch: any) => {
        const toastId = toast.loading("Sending Request to Server...");
        try {
            console.log(userName, "--", password, "------>", LOGIN_API)
            const response = await apiConnector("POST", LOGIN_API, { userName, password });

            console.log("LOGIN_API response ...........", response);

            if (response.status == 200) {
                const token = response.data.token;
                dispatch(setToken(token));
                localStorage.setItem('token', token);

                toast.success("Login Successful.");
                navigate('/accounts');

            }

        } catch (error: any) {
            console.log("LOGIN_API error .........", error);
            const message = error?.response?.data?.messageString;
            message ? toast.error(error.response.data.messageString) : toast.error("Internal Server error");
        }
        toast.dismiss(toastId);
    }
}

export function logout(navigate: any, dispatch: any) {
    return () => {
        dispatch(clearAuthSlice());
        dispatch(clearUserSlice());
        dispatch(clearAccountSlice());
        localStorage.removeItem("token")
        toast.success("Logged Out")
        navigate("/")
    }
}