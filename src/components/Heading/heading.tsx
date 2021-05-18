import React from 'react';

interface IHeadingProps {
	level?: string,
}
const Heading: React.FC<IHeadingProps> = ({children, level}) => {

	const Tag = `h${level}` as keyof JSX.IntrinsicElements
	
	return <Tag>{children}</Tag>
}

export default Heading;