import axios from "axios"
import store from '../store'

const api = axios.create({
	baseURL: process.env.VUE_APP_API_ROOT_URL,
	headers: {
		Authorization:
			`Bearer ${store.getters.currentUser ? store.getters.currentUser.token : ''}`
	}
});

export default api;