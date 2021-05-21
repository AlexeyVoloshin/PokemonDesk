import React from 'react';
import EmptyPage from "./pages/Empty";
import HomePage from "./pages/Home/home";
import Pokedex from './pages/Pokedex';

interface IGenMenu {
	title: string,
	link: LinkEnum,
	component: () => JSX.Element;
}

export enum LinkEnum {
	HOME = '/',
	POKEDEX = '/pokedex',
	LEGENDARIES = '/legendaries',
	DOCUMENTATION = '/documentation',
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

interface IAccMunu {
	[n: string]: () => JSX.Element
}

const routes = GENERAL_MENU.reduce((acc: IAccMunu, item: IGenMenu) => {
	acc[item.link] = item.component;
	return acc;
}, {});

export default routes;