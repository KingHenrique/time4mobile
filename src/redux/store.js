import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'
import thunk from 'redux-thunk'
import reducers from './reducers'

const middlewares = [ReduxPromise, thunk]

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
const store = createStoreWithMiddleware(reducers)

export default store

// With redux persist

// import { createStore, applyMiddleware } from 'redux'
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// import reducers from './reducers'

// const persistConfig = {
//   key: '@Name',
//   storage,
//   blacklist: ['events', 'createEvent']
// }

// const middlewares = []

// const persistedReducer = persistReducer(persistConfig, reducers)
// const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
// const store = createStoreWithMiddleware(persistedReducer)
// let persistor = persistStore(store)

// export { store, persistor }
