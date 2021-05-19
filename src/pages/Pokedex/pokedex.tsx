import React from 'react';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import IPokemonCard from '../../model/pokemon';

import pokemons from '../../services/pokemonsData';
import s from './pokedex.module.scss';

const Pokedex: React.FC = () => {
	const PokemonCards: IPokemonCard[] = pokemons;
	return (
		<div className={s.root}>
			<Header/>
			<Layout>
				<div className={s.root__wrap}>
				{
					PokemonCards.map((card)=> (
						<PokemonCard 
						key={card.id}
						// eslint-disable-next-line react/jsx-props-no-spreading
						{...card}/>
					))
				}
				</div>
			</Layout>
		</div>
	)
}

export default Pokedex;