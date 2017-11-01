import {combineReducers} from 'redux';
import reducer from './reducer';
import commentsReducer from './commentsReducer';

const rootReducer = combineReducers({
	reducer,
	commentsReducer
});

export default rootReducer;