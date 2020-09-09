import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

const Movie = ({ title, year, summary, poster, genres }) => {
  //여러 인자를 줄때는 {} 써주기
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie_data">
        <h3 className="movie_title">{title}</h3>
        <h5 className="movie_year">{year}</h5>
        <ul className="genres">
          {genres.map((
            genre,
            index // map은 또다른 argument 를 준다. -->  key 값으로 이용한다.
          ) => (
            <li className="genres_genre" key={index}>
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie_summary">{summary.slice(0, 180)}...</p>
      </div>
    </div>
  );
};
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
