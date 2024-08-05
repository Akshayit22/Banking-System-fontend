import { combineReducers } from "redux";
import counterReducer from './slices/counterSlice';
import authReducer from './slices/authSlice';


const rootReducer = combineReducers({
    counter: counterReducer,
    auth: authReducer,


})

export default rootReducer;