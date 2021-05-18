import React from 'react';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import IPokemonCard from '../../model/pokemon';

import pokemons from '../../services/pokemonsData';
import s from './pokedex.module.scss';

const Pokedex: React.FC = () => {
	let PokemonCards: IPokemonCard[] = pokemons;
	return (
		<div className={s.root}>
			<Header/>
			<Layout>
				<div className={s.root__wrap}>
				{
					PokemonCards.map(({id, ...res})=> (
						<PokemonCard 
						key={id}
						dataCard={res}/>
					))
				}
				</div>
			</Layout>
		</div>
	)
}

export default Pokedex;