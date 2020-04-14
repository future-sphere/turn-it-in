import AuthenticationService from '../services/authentication';

const saveTokenToBrowser = async (token, userId) => {
	window.localStorage.setItem('token', token);
	window.localStorage.setItem('userId', userId);
};

export const handleSignout = () => {
	window.localStorage.removeItem('token');
	window.localStorage.removeItem('userId');
};

export default saveTokenToBrowser;
