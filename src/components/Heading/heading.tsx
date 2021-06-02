import React from 'react';

interface IHeadingProps {
	size?: string,
	className?: string,
	[name: string]: any;
}
const Heading: React.FC<IHeadingProps> = ({children, size = '1', className}) => {

	const Tag = `h${size}` as keyof JSX.IntrinsicElements
	return <Tag className={className}>{children}</Tag>
}

export default Heading;