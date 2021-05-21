import React from 'react';
import IPokemonCard from '../../model/pokemon';
import Button from '../Button';
import Heading from "../Heading";

import s from './pokemonCard.module.scss';

const PokemonCard:React.FC<IPokemonCard> = ({img, types, stats: {attack, defense}, name,})  => {
	
    return (
        <div className={s.root}>
            <div className={s.infoWrap}>
					<div className={s.titleName}>
						<Heading  
							size='4'
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
						 {
							 types.map((type) => 
								 <>
									<Button
										// eslint-disable-next-line no-console
										onClick={()=> console.log('card')}
										size="m"
										key={type}
									>
									{type}
								</Button>
								 </>
							 )
						 }
							  
                </div>
            </div>
            <div className={s.pictureWrap}>
                <img src={img} alt={name} />
            </div>
        </div>
    );
};

export default PokemonCard;