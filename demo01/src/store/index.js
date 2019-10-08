import { createStore, applyMiddleware, compose } from 'redux';  //  引入createStore方法
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import mySagas from './sagas';

const sagaMiddleware = createSagaMiddleware();


// redux-thunk Demo
// import thunk from 'redux-thunk';
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

// const enhancer = composeEnhancers(applyMiddleware(thunk))
// const store = createStore(reducer, enhancer) // 创建数据存储仓库

const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

const store = createStore(reducer, enhancer) // 创建数据存储仓库
sagaMiddleware.run(mySagas)

export default store   //暴露出去