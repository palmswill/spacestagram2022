import axios from "axios";

const key = "Q7Ylz2WTz3FsyQuoacXOK1N8g3G13pRg0TQiBqJ8";

const baseApi = `https://api.nasa.gov/planetary/apod?api_key=${key}`;

const getRandomPost = () =>
  axios.get(`${baseApi}&count=5`).then((res) => {
    if (res.status === 200) {
      console.log(res);
      return res.data;
    }
    return [];
  });

// get post by input date string format YYYY-MM-DD;
const getPostbyDate = (date) =>
  axios.get(`${baseApi}&date=${date}`).then((res) => {
    if (res.status === 200) {
      return res.data;
    }
    return {};
  });
const APIs = { getRandomPost, getPostbyDate };

export default APIs;
