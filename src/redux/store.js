import { createStore,applyMiddleware } from 'redux'
import rootReducer from './rootReducer'
import logger from  'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
// import categoryReducer from './category/categoryReducer'

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger)))

export default store