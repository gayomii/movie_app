import React from "react";
import PropTypes from "prop-types";

function Movies({id, year, title, summary, poster}){
    return <div>
        <h3>{title}</h3>
        <h5>{year}</h5>
        <div>{summary}</div>
    </div>;
}

Movies.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
};

export default Movies;