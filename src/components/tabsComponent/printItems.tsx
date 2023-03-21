import { ComponentToPrint100x180 } from '../ComponentToPrint100x180';
import { ComponentToPrint210x148 } from '../ComponentToPrint210x148';

export const printItems = [
	{
		name: '148x210mm',
		value: 0,
		component: <ComponentToPrint210x148 />,
		src: '/bigPrint.jpg',
	},
	{
		name: '100x180mm',
		value: 1,
		component: <ComponentToPrint100x180 />,
		src: '/favicon.ico',
	},
];
