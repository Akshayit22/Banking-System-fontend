import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { userEndpoints } from "../apis";
import { setAddress, setUserDetails, setUserDto } from "../../redux/slices/userSlice";

const { USER_INFO, USER_ADDRESS_API, USER_API, USER_DETAILS_API } = userEndpoints;


export function userInfo(token: any | string) {
  return async (dispatch: any) => {
    const toastId = toast.loading("Getting Account Details..");
    try {
      //console.log(token, "------>", USER_INFO)
      const response = await apiConnector("GET", USER_INFO, {}, {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      })

      console.log("USER_INFO response.............", response);
      const data: any = response.data;
      if (response.status == 201) {
        dispatch(setAddress(data.addressDtos));
        dispatch(setUserDetails(data.userDetailsDto));
        dispatch(setUserDto(data.userDto));
        toast.success("user details fetched successfully.")
      }
    }
    catch (error) {
      console.log("USER_INFO error ........", error);
      toast.error("Internal server error, try again later.")
    }
    toast.dismiss(toastId);
  }
}

/*
get user details:
{
  "userDto": {
    "userRole": "USER",
    "username": "ram@gmail.com"
  },
  "addressDtos": [],
  "userDetailsDto": {
    "name": "Akshay Telang",
    "mobile": "123456789",
    "gender": "MALE",
    "age": 22
  }
}


*/