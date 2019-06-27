import React, { Component } from 'react'
import Products from './Products'
import Item from './Item';
import logo from '../assets/Logo_ML.png'
import lens from '../assets/ic_Search.png'
import './Components.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//Redux 
import { connect, Provider } from 'react-redux'
import store from '../store'
import { getProducts, showProducts } from '../actions/productsActions'
//Bootstrap
import { Row, Col, InputGroup, FormControl, Button, Form } from 'react-bootstrap'


class Dashboard extends Component {

    componentDidMount() {
        this.props.showProducts()

    }



    handleSubmit(event) {
        event.preventDefault();
        console.log(this.props)
        const data = new FormData(event.target);
        const [value] = data.get('searchBox')
        console.log(value)
        alert(`A name was submitted: ${value}`);
        this.props.getProducts(value)
    }

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <header className="searchBox">
                            <Row>
                                <Col md={{ span: 1, offset: 1 }}>
                                    <img src={logo} alt="logo" />
                                </Col>
                                <Col md={8}>
                                    <Form onSubmit={() => this.handleSubmit()}>
                                        <InputGroup className="mb-3 searchBoxInput">
                                            <FormControl className="searchBoxInput"
                                                placeholder="Nunca dejes de buscar"
                                                aria-label="Nunca dejes de buscar"
                                                aria-describedby="basic-addon2"
                                                name="searchBox"
                                            />
                                            <InputGroup.Append>
                                                <Button variant="outline-secondary" type="submit" value="submit" onSubmit={this.handleSubmit.bind(this)} className="lensButton"><img src={lens} alt="lens" /></Button>
                                            </InputGroup.Append>
                                        </InputGroup>
                                    </Form>
                                </Col>
                            </Row>

                        </header>
                        <div className="containerDashboard">
                            <Switch>
                                <Route exact path="/" component={Products}></Route>
                                <Route exact path="/item/:id" component={Item}></Route>
                            </Switch>
                        </div>
                    </div>
                </Router>
            </Provider>
        )
    }
}

const mapStateToProps = state => ({
    products: state.products.products
})

export default connect(mapStateToProps, { getProducts, showProducts })(Dashboard)