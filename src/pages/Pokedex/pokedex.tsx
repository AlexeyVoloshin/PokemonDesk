/* eslint-disable jsx-a11y/click-events-have-key-events */
import { navigate } from 'hookrouter';
import React, {useState} from 'react';
import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import useData from '../../hook/getData';
import useDebounce from '../../hook/useDebounce';
import {IPokemons, IPokemonsReaquest} from '../../interface/pokemon';
import { LinkEnum } from '../../routes';

import s from './pokedex.module.scss';

interface IQuery {
	limit?: number;
	name?: string;
}

const PokedexPage: React.FC = () => {
	const [searchValue, setSearchValue] = useState('');
	const [query, setQuery] = useState<IQuery>({
		limit: 12
	});

	const debouncedValue = useDebounce(searchValue, 500);

	const {
		data, 
		isLoading, 
		isError} = useData<IPokemons>('getPokemons', query, [debouncedValue]);

	const handleSearchChang = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value)
		setQuery((state: IQuery) => ({
			...state,
			name: event.target.value,
		}))
	}

	const handleClick = (id: number | string) => {
		navigate(`${LinkEnum.POKEMON}${id}`)
	}

	// if (isLoading) {
	// 	return <div className={s.loadMess}>Loading...</div>
	// }

	if(isError) {
		return <div className={s.errorMess}>Something wrong!!!!</div>
	}

	return (
		<Layout className={s.root}>
			<div className={s.root__wrap}>
				<div className={s.root__title}>
					<Heading size="3">
						{!isLoading && data && data.total} 
						<b>Pokemons</b> for you to choose your favorite
					</Heading>
				</div>
				<div className={s.root__wrapInput}>
					<input 
						className={s.root__inputText} 
						type="text" 
						value={searchValue} 
						placeholder="Encuentra tu pokémon..."
						onChange={handleSearchChang}/>
				</div>
				<div className={s.root__wrapCardsContainer}>
					<div className={s.root__container}>
					{
						!isLoading && data && data.pokemons.map((card: IPokemonsReaquest)=> 
							// eslint-disable-next-line jsx-a11y/click-events-have-key-events
							// eslint-disable-next-line jsx-a11y/no-static-element-interactions
							<div 
								className={s.root__wrapCard}
								key={card.id}
								onClick={() => handleClick(card.id)}
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

export default PokedexPage;