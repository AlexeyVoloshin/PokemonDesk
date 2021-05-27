interface Stats {
	hp: number;
	attack: number;
	defense: number;
	'special-attack': number;
	'special-defense': number;
	speed: number;
}
export interface IPokemonsReaquest  {
	abilities?: string[];
	'base_experience'?: number;
	height?: number;
	id?: number;
	img: string;
	'is_default'?: boolean;
	name: string;
	'name_clean'?: string;
	order?: number;
	stats: Stats;
	types: string[];
	weight?: number;
}

export interface IPokemons {
	total: number,
	pokemons: IPokemonsReaquest[]
}

