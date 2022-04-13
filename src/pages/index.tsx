import { useState, FC } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../store';
import { Heading, Input, Button, Text } from '@chakra-ui/react';
import { Container } from '../components/Container';
import { Main } from '../components/Main';
import { Title } from '../components/Title';
import { Form } from '../components/Form';

const Index: FC = () => {
	return (
		<Container>
			<Main>
				<Title />
				<Form />
				<Transactions />
				<Blocks />
			</Main>
		</Container>
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
