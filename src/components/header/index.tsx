import { AppBar, Avatar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import { matchPath, NavLink, useLocation } from 'react-router-dom';
import { menuItems } from './menuItems';

export const Header = () => {
	function useRouteMatch(patterns: readonly string[]) {
		const { pathname } = useLocation();

		for (let i = 0; i < patterns.length; i += 1) {
			const pattern = patterns[i];
			const possibleMatch = matchPath(pattern, pathname);
			if (possibleMatch !== null) {
				return possibleMatch;
			}
		}

		return null;
	}

	const paths = menuItems.map((menuItem) => menuItem.path);
	const routeMatch = useRouteMatch(paths);
	const currentTab = routeMatch?.pattern?.path;
	return (
		<AppBar position='static' sx={{ minwidth: '795px' }}>
			<Toolbar sx={{ padding: '10px' }}>
				<Avatar src='/favicon.ico' alt='logo' sizes='small' />

				<Typography
					variant='h6'
					component='div'
					marginLeft='10px'
					sx={{ flexGrow: 1 }}
				>
					MiShopApp
				</Typography>
				<Tabs
					value={currentTab}
					indicatorColor='secondary'
					textColor='inherit'
					centered
					//					variant='fullWidth'
				>
					{menuItems.map((el) => (
						<Tab
							icon={
								<img
									src='/favicon.ico'
									alt='icon'
									style={{ width: '40px', borderRadius: '50%' }}
								/>
							}
							iconPosition='start'
							key={el.path}
							label={el.name}
							value={el.path}
							to={el.path}
							component={NavLink}
							sx={{ textTransform: 'none' }}
						/>
					))}
				</Tabs>
			</Toolbar>
		</AppBar>
	);
};
