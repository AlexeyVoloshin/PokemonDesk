// eslint-disable-next-line import/prefer-default-export
export interface IConfig {
	client: {
	  server: {
		 protocol: string;
		 host: string;
	  };
	  endpoint: {
		 [key: string]: {
			method: string;
			uri: {
			  pathname: string;
			};
		 };
	  };
	};
 }

const config: IConfig = {
	client: {
		server: {
			protocol: 'http',
			host: 'zar.hosthot.ru'
		},
		endpoint: {
			getPokemons: {
				method: 'GET',
				uri: {
					pathname: '/api/v1/pokemons',
				}
			},
			getPokemon: {
				method: 'GET',
				uri: {
					pathname: '/api/v1/pokemon/{id}'
				}
			},
			postPokemon: {
				method: "POST",
				uri: {
					pathname: '/api/v1/pokemon/{id}'
				}
			}
		}
	}
}

export default config