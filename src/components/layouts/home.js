import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import flashSdk from '@dullbenz/yowflash-flash-sdk';

import '../../assets/css/home.css'
import home from '../../assets/images/home.svg'
import tech from '../../assets/images/technicien.svg'
import question from '../../assets/images/question.svg'
import consult from '../../assets/images/consult.svg'
import CardArticle from '../CardArticle'
import { CardGroup } from 'reactstrap'
import NavbarUser from './navbar'
import Detail from './detail';

export default class Home extends Component {
    state = {
        products: [{id:1,prix:"2000", nom:"Ordinateur",description:"Ceci est un texte",image:""},{id:1,prix:"2000", nom:"Ordinateur",description:"Ceci est un texte",image:""},{id:1,prix:"2000", nom:"Ordinateur",description:"Ceci est un texte",image:""},{id:1,prix:"2000", nom:"Ordinateur",description:"Ceci est un texte",image:""}],
        
    };

    componentDidMount() {
        flashSdk.listerProduits()
            .then(produits => {
                console.log("dsf\n\n\n", produits)
                this.setState({products: produits})
            })
            .catch()
    };
    render() {
        return (
            <div>
                <NavbarUser />
                <div className="top">
                    <div className="container">

                        <p className="sub-title">MEILLEURES OFFRES</p>
                    </div>
                    

                </div>

                <div className="container">
                    <div className='listfilt'>
                        <input type='search'id='searchcat'placeholder='Categories'/>
                        <input type='search'id='serchprice'placeholder='Prix'/> 
                        <input type='search'id='serchtime'placeholder='Duree'/>
                    </div><br></br>
                
                    <div className="row">
                    {this.state.products.map(el => 
                            (<div className="col-md-4" style={{}}>
                        <Link to='/detail'>
                           <CardArticle
                            nom={el.nom}
                            description={el.description}
                            prix={el.prix}
                            image={el.image}
                            />
                            </Link>
                        </div>))}
                        
                        
                    </div>

                </div>
                <div className="foot">
                    <p>©Copyright Génie Informatique -- promo 2023 --</p>
                </div>
                
            </div>
        )
    }
}

