import {combineReducers} from "redux";
import menuReducer from "./reducers/menuReducer";
import userReducer from "./reducers/userReducer";


const rootReducer = combineReducers({
    menuReducer,
    userReducer
})

export default rootReducer;