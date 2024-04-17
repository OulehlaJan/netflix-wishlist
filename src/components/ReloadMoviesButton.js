import './ReloadMoviesButton.css'

const ReloadMoviesButton = (props) => {
    return (
        <button className='reload-movies-button' onClick={props.reloadMovie}>Obnovit wishlist</button>
    )
}

export default ReloadMoviesButton