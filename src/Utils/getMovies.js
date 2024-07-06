import axios from 'axios';
import React from 'react';

const getMovies = async(type, API_KEY) => {

    const { data } = await axios.get(`https://api.themoviedb.org/3${type=== 'toprated' ? '/movie/top_rated' : '/tranding/all/week'}${API_KEY}&language=en-US&page=1`)
    // console.log(data)
    return data;
 
};

export default getMovies;