import {AUTH_USER_SUCCESS, SAVE_COMMENT_SUCCESS, SEARCH_ALBUM_SUCCESS, SEARCH_SUCCESS} from './actionTypes';
import axios from 'axios';
/*
//firebase
export const baseUrl = 'https://react-spotify.firebaseapp.com/';
const clientId = '1d9f5980b46b4affb07751dd3a0382d8';
const redirectUri = 'https://react-spotify.firebaseapp.com/explore';
*/
//localHost
export const baseUrl = 'http://localhost:3000/';
const clientId = 'ec3574b3c9354899855b2339601fdc47';
const redirectUri = 'http://localhost:3000/explore';

const scope = 'user-follow-modify user-follow-read user-library-read user-library-modify user-read-private user-read-birthdate user-read-email user-top-read';
const response_type = 'token';

export const url = 'https://accounts.spotify.com/authorize?' +
	'response_type=' + response_type +
	'&client_id=' + clientId +
	'&scope=' + scope +
	'&redirect_uri=' + redirectUri;

export function generateTokenSuccess() {
	return {type: AUTH_USER_SUCCESS}
}

export function searchSuccess(res) {
	return {type: SEARCH_SUCCESS, res}
}

export function searchAlbumSuccess(res) {
	return {type: SEARCH_ALBUM_SUCCESS, res}
}

export function saveCommentSuccess() {
	return {type: SAVE_COMMENT_SUCCESS}
}

function isLogged() {
	return !!localStorage.getItem('token');
}

/**
 * Search albums
 *
 * @param data. The value to search.
 * @returns {Function}
 */
export function search(data) {
	let token = localStorage.getItem('token');
	return function (dispatch) {
		axios.request({
			url: 'https://api.spotify.com/v1/search?q=' + data.value + '&type=album',
			method: 'get',
			headers: {'Authorization': 'Bearer ' + token}
		}).then(res => {
			dispatch(searchSuccess(res));
		}).catch(err => {
			if (err.response.status === 401) {
				localStorage.clear();
				dispatch(generateToken());
			}
		})
	}
}

/**
 * Search an album by id.
 *
 * @param data. The id.
 * @returns {Function}
 */
export function searchAlbum(data) {
	let token = localStorage.getItem('token');
	return function (dispatch) {
		axios.request({
			url: 'https://api.spotify.com/v1/albums/' + data,
			method: 'get',
			headers: {'Authorization': 'Bearer ' + token}
		}).then(res => {
			dispatch(searchAlbumSuccess(res));
		}).catch(err => {
			throw err;
		})
	}
}

/**
 * Generates the token and saves it in local storage.
 *
 * @returns {Function}
 */
export function generateToken() {
	return function (dispatch) {
		if (!isLogged()) {
			window.location.replace(url);
			let token = window.location.href.replace(baseUrl + 'explore#access_token=', '');
			if (token !== baseUrl) {
				localStorage.setItem('token', token);
				dispatch(generateTokenSuccess());
			}
		}
	}
}

export function saveComment(comment) {
	return function (dispatch) {
		let list = [localStorage.getItem('comments')];
		if (list) {
			debugger
			list.push(JSON.stringify(comment));
			localStorage.setItem('comments', list);
		} else {
			debugger
			localStorage.setItem('comments', JSON.stringify(comment));
		}
		dispatch(saveCommentSuccess());
	}
}