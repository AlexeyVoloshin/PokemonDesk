import React from 'react';

interface IParagraphProps {
	size?: string;
}
const Paragraph: React.FC<IParagraphProps> = ({children, size}) => {
	return (
		<p 
			style={{fontSize: `${size}px`}}
		>
			{children}
		</p>
	)
}

export default Paragraph;