import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectToken } from "../redux/slices/authSlice";
import { userInfo } from "../services/operations/UserApi";
import { MdEdit } from "react-icons/md";


const UserDetails = () => {

  const dispatch = useAppDispatch();
  const token = useAppSelector(selectToken);
  const { userDetails, userDto, address } = useAppSelector((state) => state.user);

  const [userUpdate, setUserUpdate] = useState(false);

  const toggleUserEdit = () => {
    setUserUpdate(!userUpdate);
  }

  const handleUpdateUser = () => {
    console.log("update done");

  }

  useEffect(() => {
    if (userDetails == null) {
      dispatch(userInfo(token));
    }
    // console.log(userDetails);
    // console.log(userDto);
    // console.log(address);
  })


  return (
    <div className="overflow-x-hidden w-full">
      <div className="flex flex-col">

        <div className="flex justify-between p-3">
          <p>Welcome, {userDto?.username}</p>
          <button className="text-blue-500 underline">manage account</button>
        </div>

        <hr className="h-px my-1 bg-black border-0"></hr>

        {/* User Details */}
        {
          userDetails !== null &&
          (
            <div className="bg-gray-300 m-2 pb-2 md:w-[80vh] mx-auto">

              <div className="flex justify-between">
                <h1 className="px-3 text-xl font-extralight pt-1">User Details</h1>
                <button className="text-2xl bg-gray-400 rounded-full p-2" onClick={toggleUserEdit}><MdEdit></MdEdit></button>
              </div>

              <hr className="h-px my-1 bg-black border-0"></hr>

              <div className="px-3 py-1">

                <div className="flex flex-row flex-wrap justify-between p-2">
                  <p className="text-xl">Name: <span className="font-semibold">{userDetails.name}</span></p>
                  <p className="text-xl">Mobile: <span className="font-semibold">{userDetails.mobile}</span> </p>
                </div>

                <div className="flex flex-row flex-wrap justify-between p-2">
                  <p className="text-xl">Gender: <span className="font-semibold">{userDetails.gender}</span></p>
                  <p className="text-xl">Age: <span className="font-semibold">{userDetails.age}</span></p>
                </div>

                {
                  userUpdate ?
                    (
                      <div className="flex justify-between">
                        <button className="p-2 bg-gray-500 rounded-md" onClick={toggleUserEdit}>Cancel</button>
                        <button className="p-2 bg-gray-500 rounded-md" onClick={handleUpdateUser}>Update User</button>
                      </div>
                    ) :
                    (<div></div>)
                }


              </div>
            </div>
          )
        }


        <hr className="h-px my-1 bg-black border-0"></hr>

        {/* Address Details */}
        <div className="flex justify-between">
          <h1 className="px-3 text-2xl font-extralight pt-1">Address Details</h1>
        </div>

        {
          address !== null &&
          (
            <div className="bg-gray-300 m-2 pb-2 md:w-[80vh] mx-auto">


              <div className="px-3 py-1">
                <div className="flex justify-between">
                  <h1 className="px-3 text-xl font-extralight pt-1">index</h1>
                  <button className="text-2xl bg-gray-400 rounded-full p-2" onClick={toggleUserEdit}><MdEdit></MdEdit></button>
                </div>

                <hr className="h-px my-1 bg-black border-0"></hr>

                <div className="flex flex-row flex-wrap justify-between p-2">
                  <p className="text-xl">Name: <span className="font-semibold">{userDetails.name}</span></p>
                  <p className="text-xl">Mobile: <span className="font-semibold">{userDetails.mobile}</span> </p>
                </div>

                <div className="flex flex-row flex-wrap justify-between p-2">
                  <p className="text-xl">Gender: <span className="font-semibold">{userDetails.gender}</span></p>
                  <p className="text-xl">Age: <span className="font-semibold">{userDetails.age}</span></p>
                </div>

                {
                  userUpdate ?
                    (
                      <div className="flex justify-between">
                        <button className="p-2 bg-gray-500 rounded-md" onClick={toggleUserEdit}>Cancel</button>
                        <button className="p-2 bg-gray-500 rounded-md" onClick={handleUpdateUser}>Update User</button>
                      </div>
                    ) :
                    (<div></div>)
                }


              </div>
            </div>
          )
        }


      </div>
    </div>
  )
}

export default UserDetails;

/*
{
  "userDto": {
    "userRole": "USER",
    "username": "ram@gmail.com"
  },
  "addressDtos": [
    {
      "addressId": 107,
      "street": "Random Street",
      "area": "Bombay",
      "city": "Mumbai",
      "pincode": 111001
    }
  ],
  "userDetailsDto": {
    "name": "Akshay Telang",
    "mobile": "123456789",
    "gender": "MALE",
    "age": 22
  }
}



{
  "account": {
    "accountNumber": 111006,
    "accountType": "Current",
    "balance": 1500,
    "securityPin": "$2a$10$x4VTLGKseP/q0u9ZCz2xCeXMw6eLoWqrLwqgQEIeo3eLYElR5Rcmq",
    "interestRate": 3.3
  },
  "nominee": [],
  "loan": []
}

*/