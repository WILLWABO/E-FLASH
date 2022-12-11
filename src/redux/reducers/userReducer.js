import {CREATE_USER} from '../actions/actionTypes'


const INITIAL_STORE = {
    user: {
        authentifie: false,
        userType: "",
        id: "",
        nom: "",
        prenom: "",
        email: "",
        url: ""
    }
}

const userReducer = (state=INITIAL_STORE, action) => {
    switch(action.type){
        case CREATE_USER:
            return {
                ...state,
                user : action.data
            }
        
        default:
            return state
    }
}

export default userReducer