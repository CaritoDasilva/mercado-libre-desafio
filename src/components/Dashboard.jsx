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
import { getProducts, showProducts, changeSearchBoxValue } from '../actions/productsActions'

//Bootstrap
import { Row, Col, InputGroup, FormControl, Button, Form, Breadcrumb } from 'react-bootstrap'


class Dashboard extends Component {

    componentDidMount() {
        this.props.getProducts()
    }

    searchBoxValue = e => {
        console.log(e.target.value)
        this.props.changeSearchBoxValue(e.target.value)
    }


    doTheSearch = (e) => {
        e.preventDefault()
        console.log(this.props)
        let { searchBox } = this.props.products
        console.log(searchBox)
        if (searchBox.length !== 0) {
            searchBox = searchBox.replace(/ /g, "")
            this.props.getProducts(searchBox)
            return this.props.changeSearchBoxValue('')
        }
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
                                    <Form onSubmit={this.doTheSearch}>
                                        <InputGroup className="mb-3 searchBoxInput">
                                            <FormControl className="searchBoxInput"
                                                placeholder="Nunca dejes de buscar"
                                                aria-label="Nunca dejes de buscar"
                                                aria-describedby="basic-addon2"
                                                value={this.props.products.searchBox}
                                                onChange={this.searchBoxValue}
                                                name="searchBox"
                                            />
                                            <InputGroup.Append>
                                                <Button variant="outline-secondary" type="submit" value="submit" className="lensButton"><img src={lens} alt="lens" /></Button>
                                            </InputGroup.Append>
                                        </InputGroup>
                                    </Form>
                                </Col>
                            </Row>
                        </header>

                        <Breadcrumb bsstyle="default" >
                            {this.props.products.products.length === 0 ? null : this.props.products.products.categories.path_from_root.map(item =>
                                <Breadcrumb.Item href="#" key={item.id}>{item.name}</Breadcrumb.Item>
                            )}
                        </Breadcrumb>

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
    products: state.products
})

export default connect(mapStateToProps, { getProducts, showProducts, changeSearchBoxValue })(Dashboard)