

import { CREATE_USER } from './actionTypes'

export const createUser = (user) => ({
    type: CREATE_USER,
    data: {
        authentifie: user.authentifie,
        userType: user.userType,
        id: user.id,
        nom: user.nom,
        prenom: user.prenom,
        email: user.email,
        url: user.url,
    }
})
