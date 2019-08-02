import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import menuReducer from "./menu/menu.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["cart"]
};

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
	directory: directoryReducer,
	shop: shopReducer,
	menu: menuReducer
});

export default persistReducer(persistConfig, rootReducer);
