import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Components.scss'


//Bootstrap
import { Row, Col } from 'react-bootstrap'


//Redux 
import { connect, Provider } from 'react-redux'
import { showProducts } from '../actions/productsActions'
import store from '../store'

class Products extends Component {

    componentDidMount() {
        this.props.showProducts()
        console.log(this.props.products)

    }




    render() {

        return (
            <Provider store={store}>
                <React.Fragment>
                    <div>
                        <h1>
                            {this.props.products.products.items === undefined ? null : this.props.products.products.items.map(product => (
                                <Link key={product.id} to={`/item/${product.id}`} >
                                    <Row className="productContainer">
                                        <Col className="productContainer" md={{ span: 10, offset: 1 }}>
                                            <Row className="rowContainer">
                                                <Col md={2}>
                                                    <img className="productPicture" src={product.picture} alt="foto del producto" />
                                                </Col>
                                                <Col className="priceProductContainer" md={4}>
                                                    <ul>
                                                        <li className="productPrice">${product.price.amount}</li>
                                                        <li className="productTitle">{product.title}</li>
                                                    </ul>
                                                </Col>
                                                <Col md={{ span: 2, offset: 3 }}>
                                                    <li className="productCity">
                                                        {product.city}
                                                    </li>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Link>
                            ))}
                        </h1>
                    </div>
                </React.Fragment>
            </Provider>
        )
    }
}

const mapStateToProps = state => ({
    products: state.products
})

export default connect(mapStateToProps, { showProducts })(Products)