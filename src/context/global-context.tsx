import React from 'react';
import { createContext, useState } from 'react';
import { IDesc, IPrice } from '../types';

export type ContextData = {
	globalName: string;
	globalData: IDesc[] | never[];
	globalPrice: IPrice;
	setGlobalData: React.Dispatch<React.SetStateAction<IDesc[] | never[]>>;
	setGlobalName: React.Dispatch<React.SetStateAction<string>>;
	setGlobalPrice: React.Dispatch<React.SetStateAction<IPrice>>;
};

const GlobalContext = createContext<ContextData>({} as ContextData);

export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [globalData, setGlobalData] = useState<IDesc[] | never[]>([]);
	const [globalName, setGlobalName] = useState<string>('');
	const [globalPrice, setGlobalPrice] = useState<IPrice>({
		oldPrice: 0,
		newPrice: 0,
	});

	return (
		<GlobalContext.Provider
			value={{
				globalData,
				setGlobalData,
				globalName,
				setGlobalName,
				globalPrice,
				setGlobalPrice,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export const useGlobalContext = () =>
	React.useContext<ContextData>(GlobalContext);
