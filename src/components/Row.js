import React, { useEffect, useState } from "react";
import axios from "../config/base";
import "../css/Row.css";
const imageUrl = "https://image.tmdb.org/t/p/original";

function Row({ Title, fetchApi, isLarge, openModal }) {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async (api) => {
    try {
      const req = await axios.get(api);
      setMovies(req?.data?.results);
    } catch (err) {
      console.log("err: ", err);
    }
  };

  useEffect(() => {
    fetchMovies(fetchApi);
  }, [fetchApi]);

  return (
    <div className="row">
      <h1>{Title}</h1>
      <div className="row_posters">
        {movies && movies.length > 0 ? (
          movies.map((movie) => {
            return (
              <img
                loading="lazy"
                key={movie.id}
                src={`${imageUrl}${movie.poster_path}`}
                alt={movie.name}
                className={`row_poster ${isLarge && "row_posterLarge"} `}
                onClick={() => {
                  openModal(movie?.id);
                }}
              />
            );
          })
        ) : (
          <p>Loading ...</p>
        )}
      </div>
    </div>
  );
}

export default Row;
