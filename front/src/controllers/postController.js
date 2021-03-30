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

	async getForFeed(id) {
		try {
			const posts = await api.get(`/posts-feed/${id}`);
			return posts.data;
		} catch(e) {
			console.log(e)
			throw e
		}	
	}

	async create(newPost) {	
		try {
			const post = await api.post("/posts", newPost);
			return post.data;
		} catch(e) {
			console.log(e)
			throw e
		}		
	}
}
