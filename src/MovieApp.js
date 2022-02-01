import {useState, useEffect} from "react"
import Movie from "./Movie"

function MovieApp() {
    const [loading, setLoading] = useState(true)
    const [movies, setMovies] = useState([])
    const getMovies = async() => {
        const json = await(
            await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')
        ).json()
        setMovies(json.data.movies)
        setLoading(false)
    }
    useEffect(() => {getMovies()},[])
    return (
        <div>
            {
            loading ? <strong>Loading...</strong> :
            <div>
                {movies.map((movie) => {
                  <Movie 
                  key={movie.id}
                  title = {movie.title}
                  medium_cover_image = {movie.medium_cover_image}
                  summary = {movie.summary}
                  genre = {movie.genres}
                  />     
                })}
            </div>
            }
        </div>
    )
}

export default MovieApp;