import { useState } from 'react'
import './Movie.css'
import data from '../data'
import VideoPlayer from './VideoPlayer'
import DeleteMovieButton from './DeleteMovieButton'
import DeleteAllButton from './DeleteAllButton'
import ReloadMoviesButton from './ReloadMoviesButton'
import CategorySelector from './CategorySelector'

const Movie = () => {
    const [movieList, setMovieList] = useState(data)

    const deleteOneMovie = (deletedId) => {
        const filteredMovies = movieList.filter((oneMovie) => {
            return oneMovie.id !== deletedId
        })
        setMovieList(filteredMovies)
    }

    const deleteAllMovies = () => {
        setMovieList([])
    }

    const reloadAllMovies = () => {
        setMovieList(data)
    }

    const selectCategory = (selectedCategory) => {
        if (selectedCategory === null) {
            setMovieList(data);
        } else {
            const filteredMovies = data.filter((oneMovie) => {
                return oneMovie.category === selectedCategory
            })
            setMovieList(filteredMovies)
        }
    }

    return (
        <section>
            <div>
                <CategorySelector selectCategory={selectCategory} />
            </div>
            <div className='all-movies'>
                {
                    movieList.map((oneMovie) => {
                        const { id, image, title, age, tags, description } = oneMovie

                        return <div className='one-movie' key={id}>
                            <img src={image} alt="" />
                            <h2>{title}</h2>
                            <p>{age}</p>
                            <p>{tags}</p>
                            <p>{description}</p>
                            <VideoPlayer videoSource="noice.mp4" />
                            <DeleteMovieButton deleteMovie={() => deleteOneMovie(id)} />
                        </div>
                    })
                }
            </div>
            <div className='button-box'>
                <DeleteAllButton deleteAllMovies={() => deleteAllMovies()} />
                <ReloadMoviesButton reloadMovie={() => reloadAllMovies()} />
            </div>
        </section>
    )
}

export default Movie