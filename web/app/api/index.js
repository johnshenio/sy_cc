const OPTIONS = {
	credentials: 'same-origin',
	headers: {
		Accept: 'application/json',
	},
};

export function fetchUsers() {
	return window.fetch(
		'/api/users/',
		Object.assign({}, OPTIONS, { method: 'GET' }),
	).then(response => {
		return response.json();
	});
}

export function fetchUser(id) {
	return window.fetch(
		'/api/users/' + id,
		Object.assign({}, OPTIONS, { method: 'GET' }),
	).then(response => {
		return response.json();
	});
}
