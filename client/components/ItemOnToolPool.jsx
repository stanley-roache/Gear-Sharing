import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


export const ItemOnToolPool = props => {
    const { name, status, id, photo_url } = props.item

    return (
        <div key={id} className='column is-3 gear-item'>
            <Link to={`/item/${id}`}>
                <img src={photo_url} />
            </Link>
            <Link to={`/item/${id}`}>
                <h4 className='title is-4'>
                    <a>{name}</a>
                </h4>
            </Link>
            <p>{status}</p>

        </div>
    )
}

export default connect()(ItemOnToolPool)