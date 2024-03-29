import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useGlobalContext } from '../../context/global-context';
import { useState } from 'react';
import { menuItems } from './MenuItems';
import { ListItemIcon } from '@mui/material';
//globalPrice, setGlobalPrice
//oldPrice: number; 	newPrice:
export default function AddItems() {
	const [icon, setIcon] = useState('');
	const [text, setText] = useState('');
	const {
		globalData,
		setGlobalData,
		globalName,
		setGlobalName,
		globalPrice,
		setGlobalPrice,
	} = useGlobalContext();

	const handleChangeIcon = (event: SelectChangeEvent) => {
		setIcon(event.target.value);
	};

	const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
		setText(event.target.value);
	};

	const handleChangeOldPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
		setGlobalPrice({ ...globalPrice, oldPrice: Number(event.target.value) });
	};

	const handleChangeNewPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
		setGlobalPrice({ ...globalPrice, newPrice: Number(event.target.value) });
	};

	const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
		setGlobalName(event.target.value);
	};

	const handleClearData = () => {
		setGlobalName('');
		setGlobalData([]);
		setGlobalPrice({ oldPrice: 0, newPrice: 0 });
	};

	const handleButtonPress = () => {
		if (icon && text) {
			const id = icon + text + Math.random();
			const result = [...globalData, { icon, text, id }];
			setGlobalData(result);
			setText('');
			setIcon('');
		}
	};

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<FormControl sx={{ mt: 2, minWidth: 795 }}>
				<InputLabel>Icon</InputLabel>
				<Select value={icon} label='Icon' onChange={handleChangeIcon}>
					{menuItems.map((el) => {
						return (
							<MenuItem value={el.path} key={el.name}>
								<ListItemIcon>
									<img
										src={`/icons/${el.path}`}
										alt={el.name}
										style={{
											marginRight: '10px',
											width: '30px',
											height: '30px',
										}}
									/>
								</ListItemIcon>
								{el.name}
							</MenuItem>
						);
					})}
				</Select>
				<FormHelperText>Choose icon</FormHelperText>
				<TextField
					id='outlined-name'
					label='Description'
					value={text}
					onChange={handleChangeText}
					sx={{ mt: 2 }}
					inputProps={{ maxLength: 63 }}
				/>
				<FormHelperText>Enter description</FormHelperText>
				<Button
					variant='contained'
					disableElevation
					sx={{ mt: 2 }}
					onClick={() => handleButtonPress()}
					disabled={globalData.length > 7}
				>
					Add
				</Button>
				<TextField
					id='outlined-name2'
					label='Name'
					value={globalName}
					onChange={handleChangeName}
					sx={{ mt: 5 }}
					inputProps={{ maxLength: 20 }}
				/>
				<FormHelperText sx={{ mb: 3 }}>Enter name</FormHelperText>
				<TextField
					label='Old Price'
					value={globalPrice.oldPrice}
					onChange={handleChangeOldPrice}
					sx={{ mt: 1 }}
					inputProps={{ maxLength: 6, inputmode: 'numeric' }}
				/>
				<FormHelperText sx={{ mb: 3 }}>Enter old price</FormHelperText>
				<TextField
					label='New Price'
					value={globalPrice.newPrice}
					onChange={handleChangeNewPrice}
					inputProps={{ maxLength: 6, inputmode: 'numeric' }}
				/>
				<FormHelperText sx={{ mb: 3 }}>Enter new price</FormHelperText>
				<Button
					variant='contained'
					disableElevation
					sx={{ mt: 2, mb: 2 }}
					onClick={() => handleClearData()}
				>
					Clear all data
				</Button>
			</FormControl>
		</div>
	);
}
