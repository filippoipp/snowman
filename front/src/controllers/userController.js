import axios from 'axios'

export default class UserController {
	async create(name, email, password) {	
		try {
			const user = await axios.post("/users", {
				name: name,
				email: email,
				password: password
			});
	
			return user.data;
		} catch(e) {
			console.log(e)
			throw e
		}
	}

	async getUser(id) {
		try {
			const user = await axios.get(`/user/${id}`)

			return user.data
		} catch(e) {
			console.log(e)
			throw e
		}
	}

	async getUsers(id, name) {
		if (name) {
			var url = `/users/${id}/${name}`
		}
		else {
			url = `/users/${id}`
		}
		try {
			const users = await axios.get(`${url}`);
			return users.data;
		} catch(e) {
			console.log(e)
			throw e
		}	
	}
}
