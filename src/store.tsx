import { makeAutoObservable } from 'mobx';
import { SHA256 } from 'crypto-js';
import { createContext, useContext, useEffect, FC } from 'react';

interface IBlock {
	hash: string;
	transactions: Array<string>;
}

class BlockchainStore {
	blocks: Array<IBlock> = [];
	transactions: Array<string> = ['Start'];

	constructor() {
		makeAutoObservable(this);
	}

	addTransaction(message: string) {
		this.transactions.push(message);
	}
}

const StoreContext = createContext<BlockchainStore>(new BlockchainStore());

const StoreProvider: FC<{ store: BlockchainStore }> = ({ store, children }) => {
	return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

const useStore = () => {
	return useContext(StoreContext);
};

export { BlockchainStore, StoreProvider, useStore };
