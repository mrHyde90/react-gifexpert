import React, { useState } from 'react'
import PropTypes from 'prop-types'
import AddCategory from './components/AddCategory'
import GitGrid from './components/GitGrid';

const GifExpertApp = props => {
    const [categories, setCategories] = useState(['']);
    //const handled = () => {
    //  setCategories([...categories, 'd']);
    //}

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map(category => <GitGrid key={category} category={category} />)
                }
            </ol>
        </>
    )
}

GifExpertApp.propTypes = {

}

export default GifExpertApp
