import axios from 'axios'

export default class Followig {
	async create(followingData) {	
		try {
			const following = await axios.post("/following", followingData);
            
			return following.data;
		} catch(e) {
			console.log(e)
			throw e
		}	
	}

	async verify(followingData) {
		try {
			const following = await axios.get(`/verify-following/${followingData.user_id}/${followingData.following_id}`);

			return following.data;
		} catch(e) {
			console.log(e)
			throw e
		}	
	}

	async unfollow(followingData) {
		try {
			const following = await axios.delete(`/unfollow/${followingData.user_id}/${followingData.following_id}`);

			return following.data;
		} catch(e) {
			console.log(e)
			throw e
		}	
	}
}
