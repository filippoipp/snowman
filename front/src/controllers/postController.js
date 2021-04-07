import axios from 'axios'
export default class PostController {
    async getAll() {
		try {
			const posts = await axios.get("/posts");
			return posts.data;
		} catch(e) {
			console.log(e)
			throw e
		}	
	}

	async getUserPosts(userId) {
		try {
			const posts = await axios.get(`/posts-user/${userId}`)
			return posts.data;
		} catch(e) {
			console.log(e)
			throw e
		}
	}

	async getForFeed(userid) {
		try {
			const posts = await axios.get(`/posts-feed/${userid}`);
			return posts.data;
		} catch(e) {
			console.log(e)
			throw e
		}	
	}

	async create(newPost) {	
		try {
			const post = await axios.post("/posts", newPost);
			return post.data;
		} catch(e) {
			console.log(e)
			throw e
		}		
	}
}
