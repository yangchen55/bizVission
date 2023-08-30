import { toast } from "react-toastify";


import { setBlogList } from "./FontBlogSlice";
import { fetchBlog } from "../../helps/axios";

export const getBlogAction = () => async (dispatch) => {

    const { status, blogs } = await fetchBlog();

    status === "success" && dispatch(setBlogList(blogs));
};



