import api from "../services/service.api";

export default class AuthController {
	async login(email, password) {
		try {
			const user = await api.post("/auth", {
				email: email,
				password: password
			});

			return user.data;
		} catch (err) {
			throw err;
		}
	}
}
