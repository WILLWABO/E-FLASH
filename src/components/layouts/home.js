import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../../assets/css/home.css'
import home from '../../assets/images/home.svg'
import tech from '../../assets/images/technicien.svg'
import question from '../../assets/images/question.svg'
import consult from '../../assets/images/consult.svg'
import NavbarUser from './navbar'

export default class Home extends Component {
    render() {
        return (
            <div>
                <NavbarUser />
                <div className="top">
                    <div className="container">
                        <p className="big-title">E-FLASH</p>

                        <p className="sub-title">Plateforme de vente et d'achat flash</p>
                    </div>
                </div>
                <div className="foot">
                    <p>©Copyright Génie Informatique 5GI -- promo 2023 --</p>
                </div>
            </div>
        )
    }
}

