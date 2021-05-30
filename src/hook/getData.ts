import {useEffect, useState} from 'react';
import req from '../components/utils/request';
import { IQuery } from '../pages/Pokedex/pokedex';

const useData = <T>(endpoint: string,  query: IQuery = {}, deps: any[]=[]) => {
	const [data, setData] = useState<T | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [isError, setIsError] = useState<boolean>(false);

	useEffect(() => {
		const getData = async (): Promise<void> => {
			setIsLoading(true);
			try {
				const response = await req<T>(endpoint, query);
				setData(response);
			} catch (err) {
				setIsError(true);
			} finally {
				setIsLoading(false);
			}
		}
		getData()
	}, deps);

	return {
		data,
		isLoading,
		isError
	}
}

export default useData;