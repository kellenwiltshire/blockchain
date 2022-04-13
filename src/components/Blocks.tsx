import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../store';
import { Heading, Text } from '@chakra-ui/react';

export const Blocks: FC = observer(() => {
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
