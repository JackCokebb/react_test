import PropTypes from "prop-types";

function Movie({movieNm, openDt}){

    return (
    <div>
        <h2>{movieNm}</h2>
        {openDt}
        <hr/>
    </div>);
}

Movie.propTypes={
    movieNm: PropTypes.string.isRequired,
    openDt: PropTypes.string.isRequired
}

export default Movie;