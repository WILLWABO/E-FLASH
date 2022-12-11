import React from 'react'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Redirect } from 'react-router-dom'
import { BeatLoader } from 'react-spinners'

import {API_URL} from './constants'
import '../../assets/css/form.css'
import logo from '../../assets/images/finger.png'

import { connect } from 'react-redux'
import { createUser } from '../../redux/actions/action'

class Register extends React.Component{

    state = {
        isLoading: false,
        nom: "",
        prenom: "",
        email: "",
        password: "",
        type: "",

        finish: false,
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({isLoading: true})
        fetch(API_URL + 'client/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                nom: this.state.nom,
                prenom: this.state.prenom,
                email: this.state.email,
                password: this.state.password,
                role: "Utilisateur",
            })

        })
        .then((response) => response.json())
        .then((responseJson) => {
            if (!responseJson.success){
                alert(responseJson.message)
            }
            else if (responseJson.success){
                this.props.save_user({
                    authentifie: true,
                    userType: responseJson.data.role,
                    id: responseJson.data.id,
                    nom: responseJson.data.nom,
                    prenom: responseJson.data.prenom,
                    email: responseJson.data.email,
                    url: responseJson.data.url
                })
            }
        })
        .catch((error) =>{
            console.log(error)
        })
        .then(() => this.setState({isLoading: false}))
    }

    render(){
        return(
            this.state.isLoading
            ?
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <BeatLoader loading={this.state.isLoading} size={20} color="#ffa000" />
            </div>
            :
            this.props.user.authentifie && this.props.user.userType === "Admin"
            ?
            <Redirect to="/admin/dashboard" />
            :
            this.props.user.authentifie && this.props.user.userType === "Utilisateur"
            ?
            <Redirect to="/user/dashboard" />
            :
            this.props.user.authentifie && this.props.user.userType === "Technicien"
            ?
            <Redirect to="/technicien/dashboard" />
            :
            <div className="container-fluid bodys" >
                <p style={styles.text}>Ticketing System</p>
                <form className="forms" onSubmit={(event) => this.handleSubmit(event)} >
                    <img src={logo} alt="" style={{width: 75, height: 75, marginBottom: 20}} />
                    
                    <div className="form-group">
                        <FiUser color="#777" size={20} style={{marginRight: -30}} />
                        <input 
                            type="text"
                            className="text-field"
                            placeholder="Nom"
                            value={this.state.nom}
                            onChange={(event) => {
                                this.setState({nom: event.target.value})
                            }}
                        />
                    </div>

                    <div className="form-group">
                        <FiUser color="#777" size={20} style={{marginRight: -30}} />
                        <input 
                            type="text" 
                            className="text-field"
                            placeholder="Prénom"
                            value={this.state.prenom}
                            onChange={(event) => {
                                this.setState({prenom: event.target.value})
                            }}
                        />
                    </div>
                    
                    <div className="form-group">
                        <FiMail color="#777" size={20} style={{marginRight: -30}} />
                        <input 
                            type="email" 
                            className="text-field"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={(event) => {
                                this.setState({email: event.target.value})
                            }}
                        />
                    </div>

                    <div className="form-group">
                        <FiLock color="#777" size={20} style={{marginRight: -30}} />
                        <input 
                            type="password" 
                            className="text-field"
                            placeholder="Mot de Passe"
                            value={this.state.password}
                            onChange={(event) => {
                                this.setState({password: event.target.value})
                            }}
                        />
                    </div>
                    
                    <button type="submit" className="button" >Créer un Compte</button>
                    
                </form>
            </div>
        )
    }
}

const styles = {
    text:{
        color: "#ffa000",
        marginBottom: 30,
        fontSize: 50,
        fontFamily: 'Montserrat'
    }
}


const mapStateToProps = (state) => {
    return {
        user : state.userReducer.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        save_user : (user) => dispatch(createUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)