import Url from 'url'
import { IQuery } from '../../pages/Pokedex/pokedex';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

interface IOptions {
	method: string;
	body?: string;
}

interface IGetUrlWithParamsConfig {
	method: string;
	uri: Partial<URL>;
	body: object;
}

async function req<T>(endpoint: string, query?: IQuery): Promise<T> {
	const {method, uri, body}: IGetUrlWithParamsConfig = getUrlWithParamsConfig(endpoint, query);

	const options: IOptions = {
		method
	}

	if (Object.keys(body).length > 0) {
		options.body = JSON.stringify(body)
	}
	const response =  await fetch(Url.format(uri), options).then((res) => res.json());
	
	return response;
}

export default req;