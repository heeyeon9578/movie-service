import PropTypes from "prop-types";
import {Link} from "react-router-dom"
export default function Movie({id, mediumCoverImage, title,summary,genres}){
    return (<div>
        <img src={mediumCoverImage} alt={title}/>
        <h2>
          <Link to={`${process.env.PUBLIC_URL}/movie/${id}`}>{title}</Link>
        </h2>
        <p>{summary}</p>
        <ul>
          {genres.map((g)=> (
            <li key={g}>{g}</li>
          ))}
        </ul>
        </div>
        );
}

Movie.propTypes={
    mediumCoverImage:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}