import {combineReducers } from 'redux';

import pokemonsReducer from './pokemonsReducer'

const createRootReducer = () => 
	combineReducers({
		pokemons: pokemonsReducer,
	});

export default createRootReducer;