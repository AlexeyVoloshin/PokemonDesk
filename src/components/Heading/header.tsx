import React from 'react';
import cn from 'classnames';
import s from './heading.module.scss';

interface IHeadingProps {
	size?: string,
}
const Heading: React.FC<IHeadingProps> = ({children, size}) => {
	let sizePoint;
	let uppCaseSize: string = '';
	if(size) {
		switch (size) {
			case 'xl':
				sizePoint = 1;
				break;
			case 'l':
				sizePoint = 2;
				break;
			case 'm':
				sizePoint = 3;
				break;
			case 's':
				sizePoint = 4;
				break;
			case 'xs':
				sizePoint = 5;
				break;
			case 'xxs':
				sizePoint = 6;
				break;
			default:
				sizePoint = 1;
				break;
		}
		uppCaseSize = size.toUpperCase();
	}
	
	return React.createElement(
		`h${sizePoint}`,
		{
			className: cn(s.root, s[`size${uppCaseSize }` as keyof typeof s]),
		},
		children,
	);

}

export default Heading;