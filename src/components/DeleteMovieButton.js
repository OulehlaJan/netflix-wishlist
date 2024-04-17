import './DeleteMovieButton.css'

const DeleteMovieButton = (props) => {
    return (
        <button className='delete-movie-button' onClick={props.deleteMovie}>Odebrat z wishlistu</button>
    )
}

export default DeleteMovieButton