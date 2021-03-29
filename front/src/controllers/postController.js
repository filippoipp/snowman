import api from "../services/service.api";

export default class UserController {
    async getAll() {
		try {
			const posts = await api.get("/posts");
			return posts.data;
		} catch(e) {
			console.log(e)
			throw e
		}	
	}
}
