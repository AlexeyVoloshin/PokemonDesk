import Url from 'url'
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

async function req(endpoint: string) {
	const uri = Url.format(getUrlWithParamsConfig(endpoint));
	const response =  await fetch(uri).then((res) => res.json());
	
	return response;
}

export default req;