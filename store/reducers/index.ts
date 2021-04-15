import { combineReducers } from "redux";

import { alert } from "./alertReducer";
import { wallet } from "./walletReducer";

export const rootReducer = combineReducers({
  alert,
  wallet
})
