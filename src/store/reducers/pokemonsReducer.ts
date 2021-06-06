import { Dispatch } from "react";
import { IIninitialState } from "./index";
import req from "../../components/utils/request";
import { IStateRequest } from "../../interface";
import { ITypesRequest } from "../../interface/pokemon";
import pokemonsActionTypes from "../actions/pokemonsActionTypes";

interface TypesAction {
	type: pokemonsActionTypes
	payload?: string[] 
}

type ActionTypes = TypesAction

export interface IPokemonsInitialState {
	types: IStateRequest<string>
}

const initialState: IPokemonsInitialState = {
	types: {
		isLoading: false,
		data: null,
		error: null,
	}
}

const pokemonsReducer = (state = initialState, action: ActionTypes) => {
	switch (action.type) {
		case pokemonsActionTypes.FETCH_TYPES:
			return {
				...state,
				types: {
					isLoading: true,
					data: null,
					error: null,
				}
			}
		case pokemonsActionTypes.FETCH_TYPES_RESOLVE:
			return {
				...state,
				types: {
					isLoading: false,
					data: action.payload,
					error: null,
				}
			}
		case pokemonsActionTypes.FETCH_TYPES_REJECT:
		return {
			...state,
			types: {
				isLoading: false,
				data: null,
				error: action.payload,
			}
		}
		default:
			return state;
	}
};

export const getPokemonTypes = (state: IIninitialState) => state.pokemons.types.data;
export const getPokemonTypesLoading = (state: IIninitialState) => state.pokemons.types.isLoading;

export const getTypesAction = () => {
	return async (dispatch: Dispatch<ActionTypes>) => {
		dispatch({ type: pokemonsActionTypes.FETCH_TYPES });
		try {
			const response = await req<ITypesRequest>('getPokemonTypes');
			dispatch({type: pokemonsActionTypes.FETCH_TYPES_RESOLVE, payload: response})
		} catch (error) {
			dispatch({type: pokemonsActionTypes.FETCH_TYPES_REJECT, payload: error})

		}
	}
}

export default pokemonsReducer;