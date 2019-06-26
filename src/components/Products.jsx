import React, { Component } from 'react'
// import Item from './Item';
import { Link } from 'react-router-dom'

export default class Products extends Component {
    render() {
        return (
            <div>
                <h1>
                    <Link to={'/item/:id'} >
                        PRODUCTOS
                </Link>
                </h1>
            </div>
        )
    }
}
