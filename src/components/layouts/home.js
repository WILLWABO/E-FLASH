import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../../assets/css/home.css'
import home from '../../assets/images/home.svg'
import tech from '../../assets/images/technicien.svg'
import question from '../../assets/images/question.svg'
import consult from '../../assets/images/consult.svg'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="top">
                    <div className="container">
                        <p className="big-title">WIATICKET</p>

                        <p className="sub-title">Plateforme d'assistance et de maintenance de l'ecosytème d'application WiaFirm</p>
                    </div>
                    
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <img src={home} alt="" height={250} width={250} />
                        <Link className="top-button" to="/login">Poser un Problème</Link>
                    </div>
                </div>

                <div className="container">
                    <p className="sub-title service">Services</p>

                    <div className="row">
                        <div className="col-md-4" style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                            <img src={question} alt="" height={200} width={200} />
                            <p className="text">Poser les problèmes rencontrés lors de l'utilisation des différents services disponible sur les différentes plateforme de WiaFirm.</p>
                        </div>

                        <div className="col-md-4" style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                            <img src={tech} alt="" height={200} width={200} />
                            <p className="text">Des techniciens expérimentés mis a votre disposition pour résoudre le moindre de vos soucis sur les différentes plateformes.</p>
                        </div>

                        <div className="col-md-4" style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                            <img src={consult} alt="" height={200} width={200} />
                            <p className="text">Consulter l'évolutionn et l'état d'avancement de vos différents tickets, et les relancer si besoin se fait ressentir.</p>
                        </div>
                    </div>
                </div>

                <div className="foot">
                    <p>©Copyright Génie Informatique 4GI -- promo 2023 --</p>
                </div>
            </div>
        )
    }
}

