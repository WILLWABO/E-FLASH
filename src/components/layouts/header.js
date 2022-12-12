import React, { Component } from 'react'
import { connect } from 'react-redux'
import ToolkitProvider, { Search, } from 'react-bootstrap-table2-toolkit'
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import { API_URL } from '../layouts/constants'
import '../../assets/css/header.css'

class Header extends Component {
    
    state = {
        stats: {}
    }

    componentDidMount(){
        this.fetchStats()
    }

    fetchStats = () => {
        fetch(API_URL + "user-stats/" + this.props.user.id + "/")
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                stats: responseJson,
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }

    render() {
        return (
            <div className="head">
                <div justify-contain="center">
                    <input
                    className="search"
                    placeholder="Que recherchez-vous?..."
                    />
                </div>
                <div className="header-container">
                    <Container fluid>
                        <div className="header-body">
                        {/* Card stats */}
                            <Row>
                                <Col lg="3" xl="3">
                                    <Card className="card-stats mb-4 mb-xl-0" style={{ backgroundColor: 'rgb(255 193 7 / 50%)'}}>
                                    <CardBody>
                                        <Row>
                                            <div className="col">
                                                <CardTitle tag="h6" className="text-uppercase-text-muted-mb-0" >
                                                    Parcourir les catégories
                                                </CardTitle>
                                                <span className="h3 font-weight-bold mb-0">
                                                </span>
                                            </div>
                                        </Row>
                                    </CardBody>
                                    </Card>
                                </Col>
                                <Col lg="3" xl="3">
                                    <Card className="card-stats mb-4 mb-xl-0" style={{ backgroundColor: 'rgb(255 193 7 / 50%)'}}>
                                    <CardBody>
                                        <Row>
                                            <div className="col">
                                                <CardTitle tag="h6" className="text-uppercase-text-muted-mb-0" >
                                                    Flasher
                                                </CardTitle>
                                                <span className="h3 font-weight-bold mb-0">
                                                </span>
                                            </div>
                                        </Row>
                                    </CardBody>
                                    </Card>
                                </Col>
                                
                                <Col lg="3" xl="3">
                                    <Card className="card-stats mb-4 mb-xl-0" style={{ backgroundColor: 'rgb(23 162 184 / 50%)'}} >
                                    <CardBody>
                                        <Row>
                                            <div className="col">
                                                <CardTitle tag="h6" className="text-uppercase-text-muted-mb-0" >
                                                    Flash
                                                </CardTitle>
                                                <span className="h2 font-weight-bold mb-0">
                                                </span>
                                            </div>
                                        </Row>
                                    </CardBody>
                                    </Card>
                                </Col>

                                <Col lg="3" xl="3">
                                    <Card className="card-stats mb-4 mb-xl-0" style={{ backgroundColor: 'rgb(0 255 0 / 50%)'}} >
                                    <CardBody>
                                        <Row>
                                            <div className="col">
                                                <CardTitle tag="h6" className="text-uppercase-text-muted-mb-0" >
                                                    Flashback
                                                </CardTitle>
                                                <span className="h2 font-weight-bold mb-0">
                                                </span>
                                            </div>
                                        </Row>
                                    </CardBody>
                                    </Card>
                                </Col>

                                <Col lg="3" xl="3">
                                    <Card className="card-stats mb-4 mb-xl-0" style={{ backgroundColor: ' rgb(0 123 255 / 50%)'}} >
                                    <CardBody>
                                        <Row>
                                            <div className="col">
                                                <CardTitle tag="h6" className="text-uppercase-text-muted-mb-0" >
                                                    Se connecter
                                                </CardTitle>
                                                <span className="h2 font-weight-bold mb-0">
                                                </span>
                                            </div>
                                        </Row>
                                    </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user : state.userReducer.user
    }
}

export default connect(mapStateToProps)(Header)

