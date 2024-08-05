const BASE_URL = "http://localhost:8080";

// AUTH ENDPOINTS
export const authEndpoints = {
    HOME_API: BASE_URL + "/",
    LOGIN_API: BASE_URL + "/api/auth/login",
    SIGNUP_API: BASE_URL + "/api/auth/signup",
    LOGOUT_API: BASE_URL + "/api/auth/logout",
    HEALTH_CHECK: BASE_URL + "/ health-check",
};

// USER ENDPOINTS
export const userEndpoints = {
    USER_API: BASE_URL + "/user",
    USER_INFO: BASE_URL + "/user/details",//get
    USER_DETAILS_API: BASE_URL + "/user/details",//put post,
    USER_ADDRESS_API: BASE_URL + "/user/address",//post , put with addressId
}

// ACCOUNT ENDPOINTS
export const accountEndpoints = {
    ACCOUNT_API: BASE_URL + "/account",// get, put ,post, get with accountNumber
    ACCOUNT_INFO_API: BASE_URL + "/account/details", //get with accountNumber
    ACCOUNT_NOMINEE_API: BASE_URL + "/account/nominee",//post with accountNumber, put with nominee id

}

// LOAN ENDPOINS
export const loanEndpoints = {
    LOAN_API: BASE_URL + "/loan/account", // get , get with AC-no
    // loan/account/{accountNumber} --> get Post
    // loan/account/{accountNumber}/loan/{loanId} --> Put
}

// TRANSACTION ENDPOINTS

export const transactionEndpoints = {
    DEPOSIT_API: BASE_URL + "/transaction/deposit",
    WITHDRAW_API: BASE_URL + "/transaction/withdraw",
    TRANSFER_API: BASE_URL + "/transaction/transfer",
    GET_TRANSACTION_API: BASE_URL + "/transaction/account",//get with account number
}
/* Req body:
{
  "accountNumber": 0,
  "targetAccountNumber": 0,
  "amount": 0,
  "userName": "string",
  "securityPin": "string"
}
*/

// Bank ENDPOINTS

export const bankEndpoints = {
    CREATE_USER_API: BASE_URL + "/bank/user",//post
    GET_USER_API: BASE_URL + "/bank/user/id",//get with userId
    GET_ALL_USERS_API: BASE_URL + "/bank/users",

    GET_ALL_NOMINEES_API: BASE_URL + "/bank/nominees",
    GET_ALL_ACCOUNTS_API: BASE_URL + "/bank/accounts",

    GET_LOANS_API: BASE_URL + "/bank/loans",
    UPDATE_LOAN_API: BASE_URL + "/bank/loan",// PUT WITH loanId

    GET_ALL_TRANSACTIONS: BASE_URL + "/bank/transactions",
}

// ADMIN ENDPOTNS

export const adminEndpoints = {
    DELETE_USER_API: BASE_URL + "/admin/user",//user id

    DELETE_ACCOUNT_API: BASE_URL + "/admin/account",
}
