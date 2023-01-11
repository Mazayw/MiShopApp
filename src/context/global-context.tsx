import React from 'react';
import { createContext, useState } from 'react';
import { IDesc } from '../types';

export type ContextData = {
	globalName: string;
	globalData: IDesc[] | never[];
	setGlobalData: React.Dispatch<React.SetStateAction<IDesc[] | never[]>>;
	setGlobalName: React.Dispatch<React.SetStateAction<string>>;
};

const GlobalContext = createContext<ContextData>({} as ContextData);

export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [globalData, setGlobalData] = useState<IDesc[] | never[]>([]);
	const [globalName, setGlobalName] = useState<string>('');

	return (
		<GlobalContext.Provider
			value={{ globalData, setGlobalData, globalName, setGlobalName }}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export const useGlobalContext = () =>
	React.useContext<ContextData>(GlobalContext);
