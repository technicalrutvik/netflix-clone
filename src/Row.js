import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import moviTrailer from "movie-trailer";
const baseUrl = "https://image.tmdb.org/t/p/original/";

/**
* @author
* @function Row
https://image.tmdb.org/t/p/w500
**/

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // console.log(request)
      setMovie(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      moviTrailer(movie?.title || movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  console.log(movie);
  return (
    <div className="row">
      <h2 className="row_title">{title}</h2>
      <div className="row_posters">
        {movie.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && "row__posterLarge"}`}
            src={`${baseUrl}${
              isLargeRow
                ? movie.poster_path
                : movie?.backdrop_path || movie?.poster_path || movie?.name
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
