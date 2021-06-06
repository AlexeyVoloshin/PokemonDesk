import {combineReducers } from 'redux';

import pokemonsReducer, { IPokemonsInitialState } from './pokemonsReducer'

export interface IIninitialState {
	pokemons: IPokemonsInitialState
}

const createRootReducer = () => 
	combineReducers({
		pokemons: pokemonsReducer,
	});

export default createRootReducer;