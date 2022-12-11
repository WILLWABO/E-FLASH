
import { createStore, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from './reducers/userReducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist:['userReducer']   //which reducer you want to persist
}

const rootReducer = combineReducers({
    userReducer: userReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer)

export const persistor = persistStore(store)
