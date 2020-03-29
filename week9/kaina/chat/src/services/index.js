import axios from 'axios';

const fetchGroups = () => {
	return axios.get('groups.json');
};

const fetchUsers = () => {
	return axios.get('users.json');
};

const fetchServices = {
	fetchGroups,
	fetchUsers,
};

export default fetchServices;
