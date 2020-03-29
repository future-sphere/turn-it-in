const devUrl = 'http://localhost:3000';

const prodUrl = 'https://pwitter.demo.bctc.io';

const currentEnv = process.env.REACT_APP_ENV;

const getAPIUrl = () => {
	if (currentEnv === 'dev') {
		return devUrl;
	}
	return prodUrl;
};

export default getAPIUrl;
