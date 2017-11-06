import {AUTH_USER_SUCCESS, LOAD_COMMENT_SUCCESS, SAVE_COMMENT_SUCCESS, SEARCH_SUCCESS} from '../actions/actionTypes';

export default function reducer(state = [], action) {
	switch (action.type) {
		case AUTH_USER_SUCCESS:
			return [...state, Object.assign({}, action)];
		case SEARCH_SUCCESS:
			return [action.res.data];
		case LOAD_COMMENT_SUCCESS:
			return action.list;
		case SAVE_COMMENT_SUCCESS:
			return [Object.assign({}, action.comment),...state];
		default:
			return state;
	}
}
