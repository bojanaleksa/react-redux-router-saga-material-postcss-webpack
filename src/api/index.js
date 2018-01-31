import axios from 'axios';

const makeRequest = (data) => axios.post(config.baseUrl, data, {withCredentials: true});

export default {
	basicFunction: () => makeRequest({type: 'post_data_for_backend'})
}