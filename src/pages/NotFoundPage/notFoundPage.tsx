import React from 'react';
import { navigate } from 'hookrouter';
import Button from '../../components/Button';
import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
import s from './notFoundPage.module.scss';
import TeamRocket from '../assets/img/page404/Team_Rocket.png'
import { LinkEnum } from '../../routes';

const NotFoundPage = () => {
	return (
		<div className={s.root}>
			<Layout className={s.root__content}>
				<div className={s.root__backImg}>
					<div className={s.root__imageTeam}>
						<img src={TeamRocket} alt="Team_Rocket"/>
					</div>
				</div>
				<div className={s.root__title}>
					<Heading
						size="3"
					>
						<span>The rocket team</span> has won this time.
					</Heading>
				</div>
				
				<div
					className={s.root__buttonReturn}
				>
				<Button 
					onClick={()=> navigate(LinkEnum.HOME)}
					color="yellow"
					size="l"
				>
					Return
				</Button>
				</div>
			
			</Layout>
		</div>
	)
}

export default NotFoundPage;