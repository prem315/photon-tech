import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { persistStore, persistReducer } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import storage from "redux-persist/lib/storage";
import createRootReducer from '../reducers/index';
import rootSaga  from '../sagas/index';
export const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = (history) => persistReducer(persistConfig, createRootReducer(history))

const configureStore = preloadedState => {

    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    const store = createStore(
        persistedReducer(history),
        preloadedState,
        composeEnhancer(
            applyMiddleware(
                routerMiddleware(history),
                sagaMiddleware
            ),
        ),
    )

    sagaMiddleware.run(rootSaga);
  
    // Hot reloading
    if (module.hot) {
      // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers/index', () => {
            store.replaceReducer(persistedReducer(history));
        });
    }
  
    let persiststore = persistStore(store)
    return { store, persiststore }
    
}

export default configureStore