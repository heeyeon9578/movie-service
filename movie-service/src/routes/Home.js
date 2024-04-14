import Movie from "../components/Movie";
import { useEffect, useState } from "react";
export default function Home(){
    const [loading, setLoading] = useState(true); 
  const [movies,setMovies ]=useState([]);
  const getMovies = async()=>{
    const json = await (
      await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
    )).json(); 
    setLoading(false);
    setMovies(json.data.movies);
  }

  useEffect(()=>{
    getMovies();
  },[]);
  console.log(movies)
  return (
    <div>
      {loading ? (<h1>Loading...</h1>):(
      <div>
        {movies.map(movie=> 
          <Movie key={movie.id} id={movie.id} mediumCoverImage={movie.medium_cover_image} title={movie.title} summary={movie.summary} genres={movie.genres} />
      )}</div>
      )}
    </div>
  );
}