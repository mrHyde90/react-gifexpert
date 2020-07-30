import React from 'react'
import PropTypes from 'prop-types'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem';

const GitGrid = ({ category }) => {
    const { data: images, loading } = useFetchGifs(category);


    return (
        <>
            <h2>{category}</h2>
            {loading && <p className="animate__animated animate__flash">Loading</p>}
            <div className="card-grid">

                {
                    images.map(image => <GifGridItem key={image.id} {...image} />)
                }
            </div>
        </>
    )
}

GitGrid.propTypes = {

}

export default GitGrid
