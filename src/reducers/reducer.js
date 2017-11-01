import {AUTH_USER_SUCCESS, SEARCH_SUCCESS} from '../actions/actionTypes';

export default function reducer(state = [], action) {
	switch (action.type) {
		case AUTH_USER_SUCCESS:
			return [...state, Object.assign({}, action)];
		case SEARCH_SUCCESS:
			return [action.res.data];
		default:
			return state;
	}
}
