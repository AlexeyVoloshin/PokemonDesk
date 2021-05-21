import React from 'react';
import Header from '../../components/Header';
import Heading from '../../components/Heading';

interface EmptyPageProps {
	title?: string
}
const EmptyPage: React.FC<EmptyPageProps> = ({title}) => {
	
	return (
		< >
			<Header/>
			<Heading>
				{title}
			</Heading>
		</>
	)
}

export default EmptyPage;