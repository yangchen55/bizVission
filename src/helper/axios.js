import axios from "axios";
const rootUrl = process.env.REACT_APP_DOMAIN + "api/v1";
const blogAPI = rootUrl + "/blog";

const fetchProcessor = async ({ method, url, data, isPrivate }) => {
    try {

        // const jwtToken = token || sessionStorage.getItem("accessJWT");

        // const headers = isPrivate
        //     ? {
        //         Authorization: jwtToken,
        //     }
        //     : null;

        const res = await axios({
            method,
            url,
            data,

        });
        return res.data;

    } catch (error) {

        return {
            status: "error",
            message: error.message,
        };
    }
};

export const fetchBlog = async () => {
    const url = blogAPI;
    const obj = {
        method: "get",
        url,
        isPrivate: true,
    };
    return fetchProcessor(obj);
};






