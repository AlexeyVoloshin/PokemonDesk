import pokemons from "./pokemonsData"
// import IPokemon from './../model/pokemon'


class PokemonApiService {
	constructor() {
		// eslint-disable-next-line no-underscore-dangle
		this._pokemons  = pokemons;
	}
	// eslint-disable-next-line lines-between-class-members
	getAllCards = async () => {
		return this._pokemons;
	}
}

export default PokemonApiService;