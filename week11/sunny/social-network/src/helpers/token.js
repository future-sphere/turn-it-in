// import AuthenticationService from '../services/authentication';

const saveTokenToBrowser = async (token, _id) => {
	window.localStorage.setItem('token', token); //在浏览器中存一个临时的变量， 来证明你登录了
	window.localStorage.setItem('userId', _id);
};

export const handleSignOut = () => {
	window.localStorage.removeItem('token');
	window.localStorage.removeItem('userId');
};

export default saveTokenToBrowser;
