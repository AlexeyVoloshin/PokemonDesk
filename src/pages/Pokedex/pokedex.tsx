import React, { useEffect, useState } from 'react';
import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import req from '../../components/utils/request';
import IPokemonCard from '../../model/pokemon';

import s from './pokedex.module.scss';

interface IData {
	count: number;
	limit: number;
	offset: number;
	pokemons: IPokemonCard[];
	total: number;
}

interface IPokemons {
	data: IData | undefined;
	isLoading: boolean;
	isError: boolean;
}

const usePokemons = (): IPokemons =>{
	const [data, setData] = useState<IData>();
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [isError, setIsError] = useState<boolean>(false);

	useEffect(() => {
		const getPokemons = async () => {
			setIsLoading(true);
			try {
				const response = await req('getPokemons');
				setData(response);
			} catch (err) {
				setIsError(true);
			} finally {
				setIsLoading(false);
			}
		}
		getPokemons()
	}, []);

	return {
		data,
		isLoading,
		isError
	}
}

const Pokedex: React.FC = () => {
	const {data, isLoading, isError} = usePokemons()


	if (isLoading) {
		return <div className={s.loadMess}>Loading...</div>
	}

	if(isError) {
		return <div className={s.errorMess}>Something wrong!!!!</div>
	}

	return (
		<Layout className={s.root}>
			<div className={s.root__wrap}>
				<Heading size="3" className={s.root__title}>
					{data && data.total} <b>Pokemons</b> for you to choose your favorite
				</Heading>
				<div className={s.root__wrapCardsContainer}>
					{
						data && data.pokemons.map((card: IPokemonCard)=> 
							<div className={s.root__wrapCard}>
								<PokemonCard 
									key={card.id}
									img={card.img}
									types={card.types}
									stats={card.stats}
									name={card.name}
								/>
							</div>
						)
					}
				</div>
			</div>
		</Layout>
	)
}

export default Pokedex;