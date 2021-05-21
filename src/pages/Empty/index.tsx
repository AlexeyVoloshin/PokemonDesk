import React from 'react';
import Heading from '../../components/Heading';

interface EmptyPageProps {
	title?: string
}
const EmptyPage: React.FC<EmptyPageProps> = ({title}) => {
	
	return (
		< >
			<Heading>
				{title}
			</Heading>
		</>
	)
}

export default EmptyPage;