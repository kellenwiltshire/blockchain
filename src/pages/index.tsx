import { FC } from 'react';
import { Container } from '../components/Container';
import { Main } from '../components/Main';
import { Title } from '../components/Title';
import { Form } from '../components/Form';
import { Transactions } from '../components/Transactions';
import { Blocks } from '../components/Blocks';

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

export default Index;
