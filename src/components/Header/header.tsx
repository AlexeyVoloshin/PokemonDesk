import React from 'react';
import {A, usePath} from 'hookrouter';
import cn from 'classnames';

import s from './header.module.scss';

import {ReactComponent as PokemonLogo} from '../../assets/img/header/Logo.svg'
import { GENERAL_MENU } from '../../routes';

const Header = () => {
	const path = usePath();
	
	return (
		<div className={s.root}>
			<div className={s.root__wrap} >
				<div className={s.root__pokemonLogo} >
					<PokemonLogo/>
				</div>
				<nav className={s.menuWrap}>
					{
						GENERAL_MENU.map(({title, link}) => (
							<A 
								key={title}
								href={link} 
								className={cn(s.menuWrap__linck, s.menuWrap__linck_active, {
									[s.linck_active]: path === link
									})}>
								{title}
							</A>
						))
					}
				</nav>
			</div>
		</div>
	)
}

export default Header;