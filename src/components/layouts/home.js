import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../../assets/css/home.css'
import home from '../../assets/images/home.svg'
import tech from '../../assets/images/technicien.svg'
import question from '../../assets/images/question.svg'
import consult from '../../assets/images/consult.svg'
<<<<<<< HEAD
import CardArticle from '../CardArticle'
import { CardGroup } from 'reactstrap'
=======
import NavbarUser from './navbar'
>>>>>>> main

export default class Home extends Component {
    render() {
        return (
            <div>
<<<<<<< HEAD
                <div className="top">
                    <div className="container">

                        <p className="sub-title">MEILLEURES OFFRES</p>
                    </div>
                    

                </div>

                <div className="container">
                
                    <div className="row">
                        
                        <div className="col-md-4" style={{}}>
                            <CardArticle></CardArticle>
                        </div>

                        <div className="col-md-4" >
                            <CardArticle></CardArticle>
                        </div>

                        <div className="col-md-4" >
                            <CardArticle></CardArticle>
                        </div>
                        
                    </div>

                    <div className="row">
                        
                        <div className="col-md-4" style={{}}>
                            <CardArticle></CardArticle>
                        </div>

                        <div className="col-md-4" >
                            <CardArticle></CardArticle>
                        </div>

                        <div className="col-md-4" >
                            <CardArticle></CardArticle>
                        </div>
                        
                    </div>
                </div>

                <div className="foot">
                    <p>©Copyright Génie Informatique -- promo 2023 --</p>
                </div>
=======
                <NavbarUser />
>>>>>>> main
            </div>
        )
    }
}

