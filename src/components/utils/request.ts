import Url from 'url'
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

async function req<T>(endpoint: string, id: string | number, query: object): Promise<T> {
	const uri = Url.format(getUrlWithParamsConfig(endpoint, query));
	const response =  await fetch(`${uri}/${id}`).then((res) => res.json());
	
	return response;
}

export default req;