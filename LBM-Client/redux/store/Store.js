// Store app
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, applyMiddleware } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import reducerAll from "../reducer/index";
import storage from "redux-persist/lib/storage";
import propertyReducer from '../features/propertySlice';
import userReducer from "../features/userSlice";

const reducers = combineReducers({
  reducerCompleto: reducerAll,
  property: propertyReducer,
  user: userReducer,
});

const persistConfig = {
  key: "main-root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  applyMiddleware,
});
const Persistor = persistStore(store);

export { Persistor };
export default store;
