import { useState, FC } from 'react';
import { useStore } from '../store';
import { Button, Input } from '@chakra-ui/react';

export const Form: FC = () => {
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
			<Input value={message} onChange={(e) => setMesssage(e.target.value)} placeholder='message' required mb={2} />
			<Button type='submit' colorScheme='whiteAlpha'>
				Add
			</Button>
		</form>
	);
};
