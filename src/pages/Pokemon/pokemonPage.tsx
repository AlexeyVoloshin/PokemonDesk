/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-comment-textnodes */
import { navigate } from 'hookrouter';
import React from 'react';
import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
import Paragraph from '../../components/Paragraph';
import useData from '../../hook/getData';
import { IPokemonsReaquest } from '../../interface/pokemon';
import { LinkEnum } from '../../routes';

import s from './pokemonPage.module.scss';

export interface PokemonProps {
	id: number;
}

const PokemonPage: React.FC<PokemonProps> = ({id}) => {

	const {data, isLoading} = useData<IPokemonsReaquest>('getPokemon', {id});
	
	if(isLoading) {
		return (<div>Loading...</div>)
	}

	return (
		<Layout className={s.root} >
			<div className={s.root__content}>
			<div 
				className={s.root__close}
				onClick={() => { 
					navigate(LinkEnum.POKEDEX)
				}}
			/>
				<div className={s.root__image}>
					<img src={`${data && data.img}`} alt={`${data?.name}`}/>
				</div>
				<div className={s.root__info}>
					<div className={s.root__wrapTitle}>
						<Heading 
							className={s.root__title}
							size="3"
						>
							{data?.name}	
						</Heading>
						<Heading
							className={s.root__subtitle}
							size="4"
						>
								Generation 1
						</Heading>
						<div className={s.root__circle}>
							578
						</div>
					</div>
					<div>
						<div className={s.root__cartAbilitiesBox}>
							<Paragraph>
								Abilities
							</Paragraph>
							<div 
								className={s.root__pAbilities}>
								{
									data && data.abilities?.map((item) =>
									<div
										key={item}
									>
										<Paragraph>
											{item}
										</Paragraph>
									</div> 
									
									)
								}
							</div>
						</div>
						<div className={s.root__cartAbilitiesBox}>
							<Paragraph 
								className={s.root__cartAbilitiesBox_item}>
								Healthy Points
								<div 
									className={s.root__cartAbilitiesHp}
								>
									{data?.stats.hp}
								</div>
								<div 
									className={s.root__chargeLoader}/>
							</Paragraph>
							<Paragraph
							 className={s.root__cartAbilitiesBox_item}>
								Experience
								<div className={s.root__cartAbilitiesHp}>
									{data && data.base_experience}
								</div>
								<div className={s.root__chargeLoader}/>
							</Paragraph>
						</div>
						<div className={s.root__cardBoxRow}>
							<div className={s.root__cardBoxColumn}>
								<div className={s.item_cardBox}>
									<div className={s.item_cardBox__number}>
										{data?.stats.defense}
									</div>
									<Heading
										size="6"
									>
										Defense
									</Heading>
								</div>
							</div>
							<div className={s.root__cardBoxColumn}>
								<div className={s.item_cardBox}>
									<div className={s.item_cardBox__number}>
									{data?.stats.attack}
									</div>
									<Heading
										size="6"
									>
										Attack
									</Heading>
								</div>
							</div>
							<div className={s.root__cardBoxColumn}>
								<div className={s.item_cardBox}>
									<div className={s.item_cardBox__number}>
									{data?.stats['special-attack']}
									</div>
									<Heading
										size="6"
									>
										Sp Attack
									</Heading>
								</div>
							</div>
							<div className={s.root__cardBoxColumn}>
								<div className={s.item_cardBox}>
									<div className={s.item_cardBox__number}>
									{data?.stats['special-defense']}
									</div>
									<Heading
										size="6"
									>
										Sp Defense
									</Heading>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default PokemonPage;