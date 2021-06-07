import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import req from '../components/utils/request';
import { IQuery } from '../pages/Pokedex/pokedex';
import { addPokemonsAction } from '../store/actions/pokemonsAction';
import { getAllPokemons } from '../store/reducers/pokemonsReducer';
// import {  } from '../store/reducers/pokemonsReducer';

const useData = <T>(endpoint: string,  query: IQuery = {}, deps: any[]=[]) => {
	const dispatch = useDispatch();
	const [data, setData] = useState<T | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [isError, setIsError] = useState<boolean>(false);

	useEffect(() => {
		const getData = async (): Promise<void> => {
			setIsLoading(true);
			try {
				// const response = await req<T>(endpoint, query);
				dispatch(addPokemonsAction())
				// eslint-disable-next-line react-hooks/rules-of-hooks
				const pokemons = useSelector(getAllPokemons);
				console.log('pokemons: ###', pokemons);
				/**
				 * Тут такая вот ошибка. я хочу из стора забрать данные и положить в setData но не выходит((((( что не так?
				 * Argument of type 'string[] | null' is not assignable to parameter of type 'SetStateAction<T | null>'.
  					Type 'string[]' is not assignable to type 'SetStateAction<T | null>'.
    				Type 'string[]' is not assignable to type 'T'.
      			'T' could be instantiated with an arbitrary type which could be unrelated to 'string[]'.
				 */
				setData(pokemons);
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