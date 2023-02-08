import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { APYKey } from "../../config/key"
import { Container } from "./style"



function Details () {
    const image_path = "https://image.tmdb.org/t/p/w500"

    const {id} = useParams()

    const [movie, setMovie] = useState({})

    useEffect(() =>{
            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APYKey}&language=en-US&page=1`)
            .then(response => response.json())
            .then(data =>
                {const {title, overview, poster_path, release_date} = data
                
                const movie= {
                    id,
                    title,
                    sinopse: overview,
                    image:`${image_path}${poster_path}`,
                    releaseDate: release_date
                }
                setMovie(movie)
                    
                   
                //{ setMovies(data.results)
    })
    }, [id])
    return(
        <Container>
            <div className="movie">
                <img src={movie.image} alt={movie.sinopse}/>
                <div className="details">
                    <h1>{movie.title}</h1>
                    <span>Sinopse: {movie.sinopse}</span>
                    <span className="release_date">Release Date: {movie.release_date}</span>
                   <Link to="/">
                      <button>Go Back</button>
                    </Link>
                </div>
            </div>

        </Container>
    )
}

export default Details