import React, { Component } from 'react'


//Bootstrap
import { Row, Col, Button } from 'react-bootstrap'

//Redux 
import { connect, Provider } from 'react-redux'
import { showProducts, getItemDetail } from '../actions/productsActions'
import store from '../store'


class Item extends Component {

    componentDidMount() {
        this.props.getItemDetail(this.props.match.params.id)
    }

    render() {
        if (this.props.products.item.item === undefined) {
            return null
        }
        const { item } = this.props.products.item
        const itemCondition = (item.condition[0].toUpperCase()) + item.condition.slice(1, item.condition.length)
        return (
            <Provider store={store}>
                <div>
                    {item ?
                        <Row className="productContainer">
                            <Col className="productContainer" md={{ span: 10, offset: 1 }}>
                                <Row className="rowContainer">
                                    <Row>
                                        <Col md={{ span: 6, offset: 1 }}>
                                            <img className="photoDescription" src={item.picture} alt="" />
                                        </Col>
                                        <Col md={{ span: 3, offset: 1 }}>
                                            <Row>
                                                <Col className="conditionDescription">
                                                    {itemCondition}
                                                    <span> - </span>
                                                    {item.sold_quantity} vendidos
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col className="conditionTitle">
                                                    {item.title}
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col className="conditionAmount">
                                                    ${item.price.amount}
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md={12}>
                                                    <Button className="buyButton" variant="primary" size="lg" block>Comprar</Button>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={7} className="descritpionText">
                                            Descripción del texto
                                    </Col>
                                        <Col md={7} className="descritpionText textPlain">
                                            {item.description}
                                        </Col>
                                    </Row>
                                </Row>
                            </Col>
                        </Row>
                        : null
                    }
                </div>
            </Provider>
        )
    }
}

const mapStateToProps = state => ({
    products: state.products
})

export default connect(mapStateToProps, { showProducts, getItemDetail })(Item)
