import React, { useEffect, useState } from "react";
import axios from "../config/base";
import "../css/Banner.css";
const imageUrl = "https://image.tmdb.org/t/p/original";

function Banner({ fetchApi }) {
  const [trending, setTrending] = useState({});

  const fetchTrending = async (api) => {
    try {
      const req = await axios.get(api);
      setTrending(req?.data?.results[0]);
    } catch (err) {
      console.log("err: ", err);
    }
  };

  useEffect(() => {
    fetchTrending(fetchApi);
  }, [fetchApi]);

  return (
    <div>
      <img
        src={`${imageUrl}${trending?.backdrop_path}`}
        alt={trending?.title}
        className="banner-img"
        loading="lazy"
      />
    </div>
  );
}

export default Banner;
