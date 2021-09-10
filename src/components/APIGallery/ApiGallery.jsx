import axios from "axios";

const API_KEY = "20452679-d2c9a4c3f38fef4a414948741";
axios.defaults.baseURL = "https://pixabay.com/api";
const axiosGetGallery = (searchQuery, page) => {
  const URL = `/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  return axios.get(URL).then((response) => response.data.hits);
};

export default axiosGetGallery;
