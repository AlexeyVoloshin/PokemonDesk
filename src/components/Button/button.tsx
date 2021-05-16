import React from 'react';

import cn from 'classnames';
import s from './button.module.scss';

interface IButtonProps {
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
	fullWidth?: boolean;
	colorYellow?: boolean;
	size?: string;
}

const Button: React.FC<IButtonProps> = ({children, onClick, ...res}) => {
	const {
		fullWidth = false,
		colorYellow = false,
		size = '',
	} = res;

	let sizeButton: string = '';
	if(size) {
		switch (size) {
			case 'l':
				sizeButton = 'sizeL';
				break;
			case 'm':
				sizeButton = 'sizeM';
				break;
			default:
				sizeButton = 'sizeL';
				break;
		};
	};

	return (
		<button
			type="button"
			className={cn(s.root, s[sizeButton as keyof typeof s],{
				[s.fullWidth]: fullWidth,
				[s.colorButtonYellow]: colorYellow,
			})}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;