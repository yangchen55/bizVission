import { configureStore } from "@reduxjs/toolkit";
import authReducer from './pages/authRedux/authSlice';
import blogReducer from './pages/Blog/blogSlice';

const store = configureStore ({
    reducer:{
        user: authReducer,
        blog: blogReducer,

    }

})

export default store;