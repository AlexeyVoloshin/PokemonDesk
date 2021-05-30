import React from 'react';

import cn from 'classnames';
import s from './button.module.scss';

interface IButtonProps {
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
	fullWidth?: string;
	color?: string;
	size?: string;
}

const Button: React.FC<IButtonProps> = ({children, onClick, ...res}) => {
	const {
		color = '',
		size = '',
	} = res;
	const colorClass: string = s[(color || 'green') as keyof typeof s];
	let sizeButton: string = '';

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

	return (
		<button
			type="button"
			className={cn(s.root, 
				s[sizeButton as keyof typeof s], 
				colorClass,)}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;