import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  //snippet of code which runs on specific condition
  useEffect(() => {
    //if [] is blank it mean run once when the component is rendered an ddont run again . otherwise pass a variable like [movies]
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <div className="row">
      {/* Title */}
      <h1>{title}</h1>

      {/* container with porters inside */}
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            className="row_poster"
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
