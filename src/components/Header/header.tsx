import React from 'react';
import cn from 'classnames';

import s from './header.module.scss';

import {ReactComponent as PokemonLogo} from '../../assets/img/header/Logo.svg'

interface IMenu {
	id: number,
	value: string,
	link: string
}

const MENU: IMenu[] = [
	{
		id: 1,
		value: 'Home',
		link: '#'
	},
	{
		id: 2,
		value: 'Pokédex',
		link: '#'
	},
	{
		id: 3,
		value: 'Legendaries',
		link: '#'
	},
	{
		id: 4,
		value: 'Documentation',
		link: '#'
	},
]

const Header = () => {
	return (
		<div className={s.root}>
			<div className={s.root__wrap} >
				<div className={s.root__pokemonLogo} >
					<PokemonLogo/>
				</div>
				<nav className={s.menuWrap}>
					{
						MENU.map(({id, value, link}) => (
							<a key={id} href={link} className={cn(s.menuWrap__linck, 
								s.menuWrap__linck_active
								)}>
								{value}
							</a>
						))
					}
				</nav>
			</div>
		</div>
	)
	
}

export default Header;