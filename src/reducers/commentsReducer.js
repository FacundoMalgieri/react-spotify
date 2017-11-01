import {SEARCH_ALBUM_SUCCESS} from '../actions/actionTypes';

export default function commentsReducer(state = [], action) {
	switch (action.type) {
		case SEARCH_ALBUM_SUCCESS:
			return [(action.res.data)];
		default:
			return state;
	}
}