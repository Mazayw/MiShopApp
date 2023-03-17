import { Button, Tab, Tabs } from '@mui/material';
import html2canvas from 'html2canvas';
import React, { useRef, useState } from 'react';
import ReactToPrint from 'react-to-print';
import { printItems } from './printItems';

export const TabsComponent = () => {
	const componentRef = useRef(null);

	const handleDownloadImage = async () => {
		const element = componentRef.current;
		const canvas = await html2canvas(element as unknown as HTMLElement, {
			scale: 3,
		});

		const data = canvas.toDataURL('image/jpg');
		const link = document.createElement('a');

		if (typeof link.download === 'string') {
			link.href = data;
			link.download = 'image.jpg';

			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		} else {
			window.open(data);
		}
	};
	const [value, setValue] = useState(printItems[0].value);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<>
			<Tabs
				value={value}
				onChange={handleChange}
				centered
				sx={{
					marginBottom: '20px',
				}}
			>
				{printItems.map((el) => (
					<Tab
						label={el.name}
						value={el.value}
						sx={{ textTransform: 'none' }}
						icon={
							<div
								style={{
									width: '55px',
									height: '55px',
									borderRadius: '50%',
									backgroundColor: 'white',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<img
									src={el.src}
									alt='icon'
									style={{
										width: '40px',
									}}
								/>
							</div>
						}
						iconPosition='start'
						key={el.name}
					/>
				))}
			</Tabs>

			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<span style={{ display: 'flex' }} ref={componentRef}>
					{printItems[value].component}
				</span>
				<span>
					<ReactToPrint
						trigger={() => (
							<Button variant='contained' size='large' sx={{ mt: 5 }}>
								Print
							</Button>
						)}
						content={() => componentRef.current}
					/>
					<Button
						variant='contained'
						size='large'
						sx={{ mt: 5, ml: 5 }}
						onClick={handleDownloadImage}
					>
						Download as Image
					</Button>
				</span>
			</div>
		</>
	);
};
