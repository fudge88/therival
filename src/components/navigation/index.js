import { AppBar, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';

import '../../App.css';

const pages = ['Home', 'Portfolio', 'Testimonials', 'Contact'];

const Navigation = () => {
	const [anchorElNav, setAnchorElNav] = useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = (event) => {
		setAnchorElNav(null);
	};

	return (
		// <Box sx={{ flexGrow: 1, marginBottom: 3 }}>
		<AppBar position="static" sx={{ boxShadow: 'none' }}>
			<Toolbar sx={{ backgroundColor: 'white', color: 'black' }}>
				{/* <Typography
					noWrap
					component="div"
					sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
					<img
						src={Logo}
						style={{ width: 240, height: 140 }}
						alt="rival games logo"
					/>
				</Typography> */}
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
						{pages.map((page) => (
							<MenuItem key={page} onClick={handleCloseNavMenu}>
								<Typography textAlign="center">{page}</Typography>
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
					{pages.map((page) => (
						<MenuItem key={page} onClick={handleCloseNavMenu}>
							<Typography
								variant="body1"
								textAlign="center"
								sx={{ textTransform: 'uppercase' }}>
								{page}
							</Typography>
						</MenuItem>
					))}
				</Box>
			</Toolbar>
		</AppBar>
		// </Box>
	);
};

export default Navigation;
