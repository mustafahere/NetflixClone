import React, { useEffect, useState } from 'react'
import axios from '../config/base';
import '../css/Row.css';
const imageUrl="https://image.tmdb.org/t/p/original";

function Row({Title,fetchApi,isLarge}) {
    
    const [movies,setMovies]=useState([]);
    useEffect(()=>{
        async function fetchMovies(){
            const req=await axios.get(fetchApi);
            setMovies(req.data.results);
            
            return req;
        }
        fetchMovies();
    },[fetchApi]);

    return (
    <div> <h1>{Title}</h1>
    <div className="row">
   
    <div className="row_posters">{movies.map(movie=>{
        return <img
        key={movie.id}
         src={`${imageUrl}${movie.poster_path}`}
          alt={movie.name} className={`row_poster ${isLarge && "row_posterLarge"} `}  />
    })}</div>
    </div>
    </div>
    )
}

export default Row;
