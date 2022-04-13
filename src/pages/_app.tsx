import { ChakraProvider } from '@chakra-ui/react';
import { BlockchainStore, StoreProvider } from '../store';

import theme from '../theme';
import { AppProps } from 'next/app';

const store = new BlockchainStore();

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<StoreProvider store={store}>
			<ChakraProvider resetCSS theme={theme}>
				<Component {...pageProps} />
			</ChakraProvider>
		</StoreProvider>
	);
}

export default MyApp;
