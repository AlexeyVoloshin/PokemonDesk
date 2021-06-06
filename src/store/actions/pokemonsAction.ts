import pokemonsActionTypes from "./pokemonsActionTypes";

// eslint-disable-next-line import/prefer-default-export
export const addPokemonsAction = (pokemons: any) => ({
	type: pokemonsActionTypes.ADD_POKEMONS,
	pokemons,
})