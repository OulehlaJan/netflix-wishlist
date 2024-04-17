import './DeleteAllButton.css'

const DeleteAllButton = (props) => {
    return (
        <button className='main-delete-button' onClick={props.deleteAllMovies}>Vymazat wishlist</button>
    )
}

export default DeleteAllButton