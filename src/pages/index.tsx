import { useState, FC } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../store';
import { Heading, Input, Button, Text } from '@chakra-ui/react';

const Index: FC = () => {
	return (
		<main>
			<Title />
			<Form />
			<Transactions />
			<Blocks />
		</main>
	);
};

const Title: FC = observer(() => {
	const store = useStore();

	return (
		<Heading as='h1'>
			{store.numberBlocks} Blocks({store.valid ? 'Valid' : 'Invalid'})
		</Heading>
	);
});

const Form: FC = () => {
	const store = useStore();
	const [message, setMesssage] = useState('');

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();

				store.addTransaction(message);
				setMesssage('');
			}}
		>
			<Input value={message} onChange={(e) => setMesssage(e.target.value)} placeholder='message' required />
			<Button type='submit'>Add</Button>
		</form>
	);
};

const Transactions: FC = observer(() => {
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

const Blocks: FC = observer(() => {
	const store = useStore();

	return (
		<div>
			<Heading>Blocks</Heading>
			<ul className='blocks'>
				{[...store.blocks].reverse().map((block) => (
					<li key={block.hash}>
						<Heading as='h3'>{block.hash}</Heading>
						<Text>{JSON.stringify(block.transactions, null, 2)}</Text>
					</li>
				))}
			</ul>
		</div>
	);
});

export default Index;
