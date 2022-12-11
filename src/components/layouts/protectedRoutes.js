import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

function ProtectedRoutes({user, component: Component, ...rest}) {

    let path = rest.path
    return (
        <Route {...rest} component={(props) => {
            if (user.authentifie){
                if (user.userType === "Utilisateur" && path.includes("user")){
                    return <Component {...props} />
                }
                else if (user.userType === "Technicien" && path.includes("technicien")){
                    return <Component {...props} />
                }
                else if (user.userType === "Admin" && path.includes("admin")){
                    return <Component {...props} />
                }
                else{
                    return <Redirect to="/unauthorized" />
                }
            }
            else{
                return <Redirect to="/unauthorized" />
            }
        }}
        
        />
    )
}

const mapStateToProps = (state) => {
    return {
        user : state.userReducer.user
    }
}

export default connect(mapStateToProps)(ProtectedRoutes)