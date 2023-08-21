import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./pages/Blog/blogSlice.js";

const store = configureStore({
    reducer: {
        blog: blogReducer

    },
});

export default store;