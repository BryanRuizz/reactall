import { createStore, combineReducers, compose } from 'redux';
// importacion create para su creacion y su conbinacion con otros reducers
import amountReducer from './amount/reducer';
// mandamos llamar nuestro reducer, amou... solo es como una variable
import { composeWithDevTools } from 'redux-devtools-extension';





const reducers = combineReducers({
    // se pueden llamar mas de uno y ponerlo todos aqui
    amountReducer,
});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// solo es para usar la web dev tool de redux y va dentro de la creacion del store

const store = createStore(
    reducers,
    composeEnhancers()
);

export default store;

 