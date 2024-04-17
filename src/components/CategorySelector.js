import categories from '../categories'
import './CategorySelector.css'

const CategorySelector = ({ selectCategory }) => {
    const handleCategoryChange = (selectedCategory) => {
        selectCategory(selectedCategory);
    }

    const refreshMovies = () => {
        selectCategory(null)
    }

    return <div>
        <div className='all-category-buttons'>
            <button className='one-category' onClick={() => refreshMovies()}>Vše</button>
            {
                categories.map((oneCategory, index) => {
                    return <button className='one-category' key={index} onClick={() => handleCategoryChange(oneCategory)}>
                        {oneCategory}
                    </button>
                })
            }
        </div>
    </div>
}

export default CategorySelector