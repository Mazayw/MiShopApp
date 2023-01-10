import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useGlobalContext } from '../context/global-context';
import { useState } from 'react';

export default function AddItems() {
	const [icon, setIcon] = useState('');
	const [text, setText] = useState('');
	const { globalData, setGlobalData, globalName, setGlobalName } =
		useGlobalContext();

	const handleChangeIcon = (event: SelectChangeEvent) => {
		setIcon(event.target.value);
	};

	const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
		setText(event.target.value);
	};

	const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
		setGlobalName(event.target.value);
	};

	const handleButtonPress = () => {
		if (icon && text) {
			const id = icon + text + Math.random();
			const result = [...globalData, { icon, text, id }];
			setGlobalData(result);
			setText('');
			setIcon('');
		}
		console.log('click', globalData, icon, text);
	};

	return (
		<div>
			<FormControl sx={{ mt: 2, minWidth: 795 }}>
				<InputLabel id='demo-simple-select-helper-label'>Icon</InputLabel>
				<Select
					labelId='demo-simple-select-helper-label'
					id='demo-simple-select-helper'
					value={icon}
					label='Icon'
					onChange={handleChangeIcon}
				>
					<MenuItem value={'120hz.svg'}>120hz</MenuItem>
					<MenuItem value={'Amoled.svg'}>Amoled</MenuItem>
					<MenuItem value={'Camera.svg'}>Camera</MenuItem>
					<MenuItem value={'Cpu.svg'}>Cpu</MenuItem>
					<MenuItem value={'FastCharge.svg'}>FastCharge</MenuItem>
					<MenuItem value={'NFC.svg'}>NFC</MenuItem>
					<MenuItem value={'Screen.svg'}>Screen</MenuItem>
					<MenuItem value={'Battery.svg'}>Battery</MenuItem>
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
			</FormControl>
		</div>
	);
}
