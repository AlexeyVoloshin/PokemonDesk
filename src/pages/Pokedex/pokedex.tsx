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
				<div className={s.root__title}>
					<Heading size="3">
						{data && data.total} <b>Pokemons</b> for you to choose your favorite
					</Heading>
				</div>
				<div className={s.root__wrapCardsContainer}>
					<div className={s.root__container}>
					{
						data && data.pokemons.map((card: IPokemonCard)=> 
							<div 
								className={s.root__wrapCard}
								key={card.id}
							>
								<PokemonCard 
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
			</div>
		</Layout>
	)
}

export default Pokedex;