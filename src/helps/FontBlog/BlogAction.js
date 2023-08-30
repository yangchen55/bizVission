import { toast } from "react-toastify";
import { fetchBlog } from "../../helper/axios";

import { setBlogList } from "./blogSlice";

export const getBlogAction = () => async (dispatch) => {

    const { status, blogs } = await fetchBlog();

    status === "success" && dispatch(setBlogList(blogs));
};



