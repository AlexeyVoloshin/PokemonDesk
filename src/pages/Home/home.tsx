import React from 'react';

import Header from '../../components/Header';
import Button from '../../components/Button';
import s from './home.module.scss';
import Parallax from './components/Parallax';
import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import Paragraph from '../../components/Paragraph';


const HomePage = () => {
	return (
		<div className={s.root}>
			<Header />
			<Layout className={s.root__wrap}>
				<div className={s.root__wrapText}>
					<div className={s.root__contentTitle}>
						<Heading
							size="m"
						>
							<b>Find</b> all your favorite <b>Pokemon</b>
						</Heading>
					</div>
					<div className={s.root__contentSubtitle}>
						<Paragraph size="16">
						You can know the type of Pokemon, its strengths, disadvantages and abilities
						</Paragraph>
					</div>
					<div className="root__buttonWrap">
						<Button 
							onClick={(event) => console.log('Click!!!!')}
							fullWidth
							colorYellow
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

