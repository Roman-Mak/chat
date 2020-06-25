import {loadingReducer} from "./loadingReducer";
import {combineReducers, createStore} from "redux";

const rootReducer = combineReducers({
    loading: loadingReducer
});

const store = createStore(rootReducer);

export default store;