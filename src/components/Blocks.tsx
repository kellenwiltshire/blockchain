import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../store';
import { Box, Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react';

export const Blocks: FC = observer(() => {
	const store = useStore();

	return (
		<Box>
			<Heading marginBottom={5} textDecoration={'underline'}>
				Blocks
			</Heading>
			<UnorderedList spacing={5} listStyleType='none'>
				{[...store.blocks].reverse().map((block) => (
					<Box borderWidth='1px' borderRadius='10px' p={2}>
						<ListItem key={block.hash}>
							<Heading as='h3'>{block.hash}</Heading>
							<Text>{JSON.stringify(block.transactions, null, 2)}</Text>
						</ListItem>
					</Box>
				))}
			</UnorderedList>
		</Box>
	);
});
