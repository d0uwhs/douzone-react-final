import rootReducer from "./rootReducer";
import {createStore, applyMiddleware} from "redux";
import ReduxThunk from "redux-thunk";


const store = createStore(
    rootReducer,
    /**
     * Middleware 적용.
     */
    applyMiddleware(ReduxThunk)
)

export default store