import axios from 'axios';

export const fetchImages = (
    query = '',
    page = 1,
    key = '20675253-cdd8f56cc704bd20aa8c935fc',
) => {
    return axios.get(
        `https://pixabay.com/api/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
    );
};

export const someFunction = () => { };