import rootReducer from "./rootReducer";
import {createStore, applyMiddleware} from "redux";
import ReduxThunk from "redux-thunk";
import {logger} from 'redux-logger'
import {composeWithDevTools} from "@redux-devtools/extension";


const store = createStore(
    rootReducer,
    /**
     * Devtools 적용.
     * Middleware 적용.
     */
    composeWithDevTools(applyMiddleware(ReduxThunk, logger))

)

export default store