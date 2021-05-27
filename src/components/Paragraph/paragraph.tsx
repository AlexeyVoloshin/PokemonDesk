import React from 'react';

interface IParagraphProps {
	size?: string;
	className?: string;
}
const Paragraph: React.FC<IParagraphProps> = ({children, size, className}) => {
	return (
		<p 
			className={className}
			style={{fontSize: `${size}px`}}
		>
			{children}
		</p>
	)
}

export default Paragraph;