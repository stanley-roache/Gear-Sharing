import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


export const ItemOnToolPool = props => {
    const { name, status, id, photo_url, trustframework, user_name } = props.item

    return (
        <div key={id} className='column is-3 gear-item'>
            <Link to={`/item/${id}`}>
                <img src={photo_url} />
            </Link>
            <Link to={`/item/${id}`}>
                <h4 className='title is-4 tool-pool-name'>
                    <a>{name}</a>
                </h4>
            </Link>
            <div className='message'>
                <p>{status}</p>
                <p>Trust framework: </p>
                <p>{trustframework}</p>
            </div>

        </div>
    )
}

export default connect()(ItemOnToolPool)