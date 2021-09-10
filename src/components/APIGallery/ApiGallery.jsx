import axios from "axios";

const API_KEY = "20675253-cdd8f56cc704bd20aa8c935fc";
axios.defaults.baseURL = "https://pixabay.com/api";
const axiosGetGallery = (searchQuery, page) => {
  const URL = `/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  return axios.get(URL).then((response) => response.data.hits);
};

export default axiosGetGallery;
