import { useEffect } from "react";
import { useParams } from "react-router-dom"
export default function Detail(){
    const {id} = useParams();
    const getMovie = async()=>{
        const json= await(
            await fetch(`https://yts.mx/api/v2/list_movies.json?movie_id=${id}`)
        ).json();
        
        console.log(json);
    }
    useEffect(()=>{
        getMovie();
    },[]);
    return <h1>detail</h1>
}