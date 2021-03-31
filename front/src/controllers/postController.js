import api from "../services/service.api";

export default class PostController {
    async getAll() {
		try {
			const posts = await api.get("/posts");
			return posts.data;
		} catch(e) {
			console.log(e)
			throw e
		}	
	}

	async getForFeed(userid) {
		try {
			const posts = await api.get(`/posts-feed/${userid}`);
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
