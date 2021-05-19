import React from 'react';
import IPokemonCard from '../../model/pokemon';
import Button from '../Button';
import Heading from "../Heading";

import s from './pokemonCard.module.scss';

const PokemonCard:React.FC<IPokemonCard> = (card)  => {
	
	const {img, types, stats, name,} = card;
	const [typesA = 'unknown', typesB = 'unknown'] = types;
	const {attack, defense} = stats;
    return (
        <div className={s.root}>
            <div className={s.infoWrap}>
					<div className={s.titleName}>
						<Heading  
							level='4'
						>
							{name}
						</Heading>
					</div>
                <div className={s.statWrap}>
                    <div className={s.statItem}>
                        <div className={s.statValue}>
                            {attack}
                        </div>
                        Attack
                    </div>
                    <div className={s.statItem}>
                        <div className={s.statValue}>
                            {defense}
                        </div>
                        Defense
                    </div>
                </div>
                <div className={s.labelWrap}>
							  <Button
							  		onClick={()=> console.log('card')}
									  size="m"
								>
							  	{typesA}
							  </Button>
							  <Button
							  		onClick={()=> console.log('card')}
									  size="m"
								>
							  	{typesB}
							  </Button>
                </div>
            </div>
            <div className={s.pictureWrap}>
                <img src={img} alt={name} />
            </div>
        </div>
    );
};

export default PokemonCard;