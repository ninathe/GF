import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import MainWrapper from './components/MainWrapper'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
// import configureStore from './store';
import Frontpage from './components/frontpage/onepirate/Home'

import registerServiceWorker from './registerServiceWorker'
import rootReducer from './reducers/rootReducer'

const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <Frontpage />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
