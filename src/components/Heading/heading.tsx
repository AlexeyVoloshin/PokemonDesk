import React from 'react';

interface IHeadingProps {
	size?: string,
	className?: React.HTMLAttributes<HTMLDivElement> | string,
	[name: string]: any;
}
const Heading: React.FC<IHeadingProps> = ({children, size}) => {

	const Tag = `h${size}` as keyof JSX.IntrinsicElements
	
	return <Tag>{children}</Tag>
}

export default Heading;