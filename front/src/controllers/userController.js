import api from "../services/service.api";

export default class UserController {
	async create(name, email, password) {	
		try {
			const user = await api.post("/users", {
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

	async getUsers(id, name) {
		try {
			const users = await api.get(`/users/${id}/${name}`);
			return users.data;
		} catch(e) {
			console.log(e)
			throw e
		}	
	}
}
