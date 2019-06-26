import React, { Component } from 'react'
import Products from './Products'
import Item from './Item';
import logo from '../assets/Logo_ML.png'
import lens from '../assets/ic_Search.png'
import './Components.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//Redux 
import { Provider } from 'react-redux'
import store from '../store'

//Bootstrap
import { Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap'


export default class Dashboard extends Component {
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
                                    <InputGroup className="mb-3 searchBoxInput">
                                        <FormControl className="searchBoxInput"
                                            placeholder="Nunca dejes de buscar"
                                            aria-label="Nunca dejes de buscar"
                                            aria-describedby="basic-addon2"
                                        />
                                        <InputGroup.Append>
                                            <Button variant="outline-secondary" className="lensButton"><img src={lens} alt="lens" /></Button>
                                        </InputGroup.Append>
                                    </InputGroup>
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
