import { combineReducers } from "redux";
import counterReducer from './slices/counterSlice';
import authReducer from './slices/authSlice';
import userReducer from './slices/userSlice';
import accountReducer from './slices/accountSlice';


const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    account: accountReducer,
    counter: counterReducer,

})

export default rootReducer;