import React from 'react';
import EmptyPage from "./pages/Empty";
import HomePage from "./pages/Home/home";
import Pokedex from './pages/Pokedex';
import PokemonPage from './pages/Pokemon';
import { PokemonProps } from './pages/Pokemon/pokemonPage';

interface IGenMenu {
	title: string,
	link: LinkEnum,
	component: (props: React.PropsWithChildren<any>) => JSX.Element;
}

export enum LinkEnum {
	HOME = '/',
	POKEDEX = '/pokedex',
	LEGENDARIES = '/legendaries',
	DOCUMENTATION = '/documentation',
	POKEMON = '/pokedex/:id',
}

export const GENERAL_MENU: IGenMenu[] = [
	{
		title: 'Home',
		link: LinkEnum.HOME,
		component: () => <HomePage/>
	},
	{
		title: 'Pokédex',
		link: LinkEnum.POKEDEX,
		component: () => <Pokedex />
	},
	{
		title: 'Legendaries',
		link: LinkEnum.LEGENDARIES,
		component: () => <EmptyPage title="Legendaries"/>
	},
	{
		title: 'Documentation',
		link: LinkEnum.DOCUMENTATION,
		component: () => <EmptyPage title="Documentation"/>
	},
];

const SECOND_ROUTES: IGenMenu[] = [
	{
		title: 'Pokemon',
		link: LinkEnum.POKEMON,
		component: ({id}: PokemonProps) => <PokemonPage id={id}/>
	}
]

interface IAccMunu {
	[n: string]: (props: React.PropsWithChildren<any>) => JSX.Element
}

const routes = [...GENERAL_MENU, ...SECOND_ROUTES].reduce((acc: IAccMunu, item: IGenMenu) => {
	acc[item.link] = item.component;
	return acc;
}, {});

export default routes;