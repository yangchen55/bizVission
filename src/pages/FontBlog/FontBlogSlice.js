import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    blogList: [],
    isLoading: false,
    selectedBlog: {},
};

const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
        requestPending: (state) => {
            state.isLoading = true;
        },
        setBlogList: (state, { payload = [] }) => {
            state.blogList = payload

        },

        setSelectedBlog: (state, { payload }) => {
            state.selectedBlog = payload;
        },

    },
});

const { reducer, actions } = blogSlice;

export const { requestPending, setBlogList, setSelectedBlog } = actions;

export default reducer;
