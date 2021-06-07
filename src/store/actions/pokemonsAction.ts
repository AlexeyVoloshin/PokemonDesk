/* eslint-disable import/prefer-default-export */
import { Dispatch } from "react"
import pokemonsActionTypes from "./pokemonsActionTypes";

import req from "../../components/utils/request";

// eslint-disable-next-line import/prefer-default-export
interface TypesAction {
	type: pokemonsActionTypes
	allpokemons: pokemonsActionTypes
	payload?: any[] | undefined
}

type ActionT = TypesAction

export const addPokemonsAction = () => {
	return async (dispatch: Dispatch<ActionT>) => {
		try {
			const res = await req('getPokemons');
			/**
			 * данные в стор удалось положить 
			 */
			dispatch({ type: pokemonsActionTypes.GET_POKEMONS, payload: res})

		} catch (error) {
			console.error(error);
			
		}
	}
}