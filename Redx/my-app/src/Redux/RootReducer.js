
import {CounterReducer} from './Reducers';
import {NameReducer} from './Reducers';
import {combineReducers} from 'redux';



const rootReducer = combineReducers({
    counter: CounterReducer,
    name: NameReducer
})

export default rootReducer;