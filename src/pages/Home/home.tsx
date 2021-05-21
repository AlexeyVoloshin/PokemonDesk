import React from 'react';

import { navigate } from 'hookrouter';
import Button from '../../components/Button';
import s from './home.module.scss';
import Parallax from './components/Parallax';
import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import Paragraph from '../../components/Paragraph';
import { LinkEnum } from '../../routes';

const HomePage = () => {
	return (
		<div className={s.root}>
			<Layout className={s.root__wrap}>
				<div className={s.root__wrapText}>
					<div className={s.root__contentTitle}>
						<Heading
							size="1"
						>
							Find<span> all your favorite </span>Pokemon
						</Heading>
					</div>
					<div className={s.root__contentSubtitle}>
						<Paragraph size="16">
						You can know the type of Pokemon, its strengths, disadvantages and abilities
						</Paragraph>
					</div>
					<div className="root__buttonWrap">
						<Button 
							onClick={() => navigate(LinkEnum.POKEDEX)}
							color="green"
							size="l"
						>
							See pokemons
						</Button>
					</div>
				</div>
				<div className="root__contentParallax">
					<Parallax/>
				</div>
			</Layout>
		</div>
	)
}

export default HomePage;

