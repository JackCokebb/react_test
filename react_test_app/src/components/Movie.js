import PropTypes from "prop-types";

// link may seems to be same with <a href="~~" in HTML, 
// but Link does not need to reload the page, but href in HTML does
import {Link} from "react-router-dom";

function Movie({id, movieNm, openDt}){

    return (
    <div>
        <h2>
            <Link to={`${process.env.PUBLIC_URL}/movie/${id}`}>{movieNm}</Link>
        </h2>
        {openDt}
        <hr/>
    </div>);
}

Movie.propTypes={
    id: PropTypes.string.isRequired,
    movieNm: PropTypes.string.isRequired,
    openDt: PropTypes.string.isRequired
}

export default Movie;
