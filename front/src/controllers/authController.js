import api from "../services/service.api";

export default class AuthController {
	async login(email, password) {
		
		const user = await api.post("/auth", {
			email: email,
			password: password
		});

		return user.data;
	
	
	}
}
