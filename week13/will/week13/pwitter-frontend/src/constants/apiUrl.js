const devUrl = 'http://localhost:3005';
const prodUrl = 'https://pwitter.demo.bctc.io';
const currentEnv = process.env.REACT_APP_ENV;

const getApiURL = () => {
  return currentEnv === 'dev' ? devUrl : prodUrl;
};

export default getApiURL;
