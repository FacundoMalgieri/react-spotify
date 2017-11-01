import {AUTH_USER_SUCCESS, SEARCH_ALBUM_SUCCESS, SEARCH_SUCCESS} from './actionTypes';
import axios from 'axios';

export function generateTokenSuccess() {
	return {type: AUTH_USER_SUCCESS}
}

export function searchSuccess(res) {
	return {type: SEARCH_SUCCESS, res}
}

export function searchAlbumSuccess(res) {
	return {type: SEARCH_ALBUM_SUCCESS, res}
}

export function search(data) {
	let token = localStorage.getItem('token');
	return function (dispatch) {
		axios.request({
			url: 'https://api.spotify.com/v1/search?q=' + data.value + '&type=album',
			method: 'get',
			headers: {'Authorization': 'Bearer ' + token}
		}).then(res => {
			dispatch(searchSuccess(res));
		})
			.catch(err => {
				if (err.response.status === 401) {
					dispatch(generateToken());
				}
			})
	}
}

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

export function generateToken() {
	return function (dispatch) {
		const scope = 'user-follow-modify user-follow-read user-library-read user-library-modify user-read-private user-read-birthdate user-read-email user-top-read';
		const response_type = 'token';
		const url = 'https://accounts.spotify.com/authorize?' +
			'response_type=' + response_type +
			'&client_id=' + 'ec3574b3c9354899855b2339601fdc47' +
			'&scope=' + scope +
			'&redirect_uri=' + 'http://localhost:3000/explore';
		let token = '';
		new Promise(resolve => {
			resolve(window.location.replace(url));
		}).then(resolve => {
			token = window.location.href.replace('http://localhost:3000/explore#access_token=', '');
			localStorage.setItem('token', token);
			dispatch(generateTokenSuccess());
		});
	}
}
