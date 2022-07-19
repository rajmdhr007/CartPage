import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import itemReducer from "./itemReducer";

const finalRootReducer=combineReducers({
    itemStore:itemReducer,
    cartStore:cartReducer
}
    )
    export default finalRootReducer