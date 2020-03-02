import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {createStore,combineReducers, applyMiddleware, compose} from 'redux';
import issueListReducer from './store/reducers/listReducer'
import issueReducer from './store/reducers/issueReducer'
import filterReducer from './store/reducers/filterReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
          issueList: issueListReducer,
          issue: issueReducer,
          filter:filterReducer
})

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));




serviceWorker.unregister();
