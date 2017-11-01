import delay from './delay';

const users = [
	{
		id: 'usuario1',
		name: 'Usuario1',
	},
	{
		id: 'usuario2',
		name: 'Usuario2',
	},
	{
		id: 'usuario3',
		name: 'Usuario3',
	}
];

const generateId = (user) => {
	return user.value.toLowerCase() + '_id';
};

class UserApi {
	static getAllUsers() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(Object.assign([], users));
			}, delay);
		});
	}

	static saveUser(user) {
		user = Object.assign({}, user);
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				user.id = generateId(user);
				users.push(user);
				resolve(user);
			}, delay);
		});
	}

	static deleteUser(userId) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const indexOfAuthorToDelete = users.findIndex(user => {
					user.id === userId;
				});
				users.splice(indexOfAuthorToDelete, 1);
				resolve();
			}, delay);
		});
	}
}

export default UserApi;