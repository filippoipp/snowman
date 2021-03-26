import axios from "axios"
import store from '../store'

let user

setTimeout(() => user = store.getters.currentUser)

const api = axios.create({
	baseURL: process.env.VUE_APP_API_ROOT_URL,
	headers: {
		Authorization:
			`Bearer ${user ? user.token : ''}`
	}
});

export default api;