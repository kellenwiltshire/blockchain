import { Flex, FlexProps } from '@chakra-ui/react';

export const Container = (props: FlexProps) => {
	return (
		<Flex
			direction='column'
			alignItems='center'
			minHeight='100vh'
			justifyContent='flex-start'
			bg='gray.600'
			color='white'
			{...props}
		/>
	);
};
