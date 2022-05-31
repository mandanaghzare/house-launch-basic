import { configureStore } from "@reduxjs/toolkit";
import activateSlice from "../redux/activateSlice";

export default configureStore({
    reducer: {
        activate: activateSlice
    },
})