import React from 'react';
import {IPokemonsReaquest} from '../../interface/pokemon';
import Button from '../Button';
import Heading from "../Heading";

import s from './pokemonCard.module.scss';

const PokemonCard:React.FC<IPokemonsReaquest> = ({img, types, stats: {attack, defense}, name,})  => {
	
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
								 <div className={s.labelWrap__button}
								 	key={type}
								 >
									<Button
										// eslint-disable-next-line no-console
										onClick={()=> console.log('card')}
										size="m"
									>
									{type}
								</Button>
								 </div>
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