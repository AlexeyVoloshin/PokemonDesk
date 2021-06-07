/* eslint-disable jsx-a11y/click-events-have-key-events */
import { navigate } from 'hookrouter';
import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import useData from '../../hook/getData';
import useDebounce from '../../hook/useDebounce';
import {IPokemons, IPokemonsReaquest} from '../../interface/pokemon';
import { LinkEnum } from '../../routes';

import { getPokemonTypes, getTypesAction, getPokemonTypesLoading } from '../../store/reducers/pokemonsReducer';


import s from './pokedex.module.scss';

export interface IQuery {
	limit?: number;
	name?: string;
	id?: number;
}

const PokedexPage: React.FC = () => {
	const dispatch = useDispatch();
	const types = useSelector(getPokemonTypes);
	const isTypesLoading = useSelector(getPokemonTypesLoading);
	const [searchValue, setSearchValue] = useState('');
	const [query, setQuery] = useState<IQuery>({
		limit: 12,
	});

	const debouncedValue = useDebounce(searchValue, 500);

	const {
		data, 
		isLoading, 
		isError} = useData<IPokemons>('getPokemons', query, [debouncedValue]);

	useEffect(() => {
		dispatch(getTypesAction())
	}, []);

	const handleSearchChang = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value)
		setQuery((state: IQuery) => ({
			...state,
			name: event.target.value,
		}))
	}

	const handleClick = (id: number) => {
		if(LinkEnum.POKEMON.indexOf(':id') !== -1) {
			const result = LinkEnum.POKEMON.replace(':id', `${id}`);
			navigate(`${result}`);
		}
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
				<div>
					{
						isTypesLoading ? 'Loading...' : types?.map(item => <div>{item}</div>)
					}
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
								onClick={() =>{ 
									if(card.id) {
										handleClick(card.id) 
									}
								}}
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