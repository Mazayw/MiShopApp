export interface IDesc {
	icon?: string;
	text?: string;
	id?: string;
}

export interface IData {
	desc?: IDesc[];
}

export interface IPrice {
	oldPrice: number;
	newPrice: number;
}
