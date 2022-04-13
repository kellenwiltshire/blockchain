import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../store';
import { Box, Heading, ListItem, UnorderedList } from '@chakra-ui/react';

export const Transactions: FC = observer(() => {
	const store = useStore();

	return store.transactions.length > 0 ? (
		<Box borderWidth='1px' borderRadius='10px' p={2}>
			<Heading as='h2' size='2xl'>
				Pending Transactions
			</Heading>
			<UnorderedList spacing={3} listStyleType='none'>
				{store.transactions.map((transaction, i) => {
					return <ListItem key={i}>{transaction}</ListItem>;
				})}
			</UnorderedList>
		</Box>
	) : null;
});
