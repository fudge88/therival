import { AppBar, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';

import '../../App.css';

import { page } from '../../data/navLink';
import { Link } from 'react-router-dom';

const Navigation = () => {
	const [anchorElNav, setAnchorElNav] = useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = (event) => {
		setAnchorElNav(null);
	};

	return (
		<AppBar position="static" sx={{ boxShadow: 'none' }}>
			<Toolbar sx={{ backgroundColor: 'white', color: 'black' }}>
				<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
					<IconButton
						size="large"
						aria-label="account of current user"
						aria-controls="menu-appbar"
						aria-haspopup="true"
						onClick={handleOpenNavMenu}
						color="inherit">
						<MenuIcon />
					</IconButton>
					<Menu
						id="menu-appbar"
						anchorEl={anchorElNav}
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'left',
						}}
						keepMounted
						transformOrigin={{
							vertical: 'top',
							horizontal: 'left',
						}}
						open={Boolean(anchorElNav)}
						onClose={handleCloseNavMenu}
						sx={{
							display: { xs: 'block', md: 'none' },
						}}>
						{page.map((item) => (
							<MenuItem key={item.id} onClick={handleCloseNavMenu}>
								<Typography textAlign="center">
									<Link to={`${item.nav}`} key={item.id}>
										{item.title}
									</Link>
								</Typography>
							</MenuItem>
						))}
					</Menu>
				</Box>
				<Box
					sx={{
						flexGrow: 1,
						display: { xs: 'none', md: 'flex' },
						justifyContent: 'center',
					}}>
					{page.map((item) => (
						<MenuItem key={item.id} onClick={handleCloseNavMenu}>
							<Typography
								variant="body1"
								textAlign="center"
								sx={{ textTransform: 'uppercase' }}>
								<Link to={`${item.nav}`} key={item.id}>
									{item.title}
								</Link>
							</Typography>
						</MenuItem>
					))}
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Navigation;
