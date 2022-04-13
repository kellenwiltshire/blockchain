import { Heading } from '@chakra-ui/react';
import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../store';

export const Title: FC = observer(() => {
	const store = useStore();

	return (
		<Heading as='h1'>
			{store.numberBlocks} Blocks({store.valid ? 'Valid' : 'Invalid'})
		</Heading>
	);
});
