import { configureStore } from "@reduxjs/toolkit";
import authReducer from './pages/authRedux/authSlice';

const store = configureStore ({
    reducer:{
        user: authReducer,

    }

})

export default store;