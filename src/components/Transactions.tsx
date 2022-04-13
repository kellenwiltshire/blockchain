import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../store';
import { Heading } from '@chakra-ui/react';

export const Transactions: FC = observer(() => {
	const store = useStore();

	return store.transactions.length > 0 ? (
		<div>
			<Heading as='h2' size='2xl'>
				Pending Transactions
			</Heading>
			<ul className='pending'>
				{store.transactions.map((transaction, i) => {
					return <li key={i}>{transaction}</li>;
				})}
			</ul>
		</div>
	) : null;
});
