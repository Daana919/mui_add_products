import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import { createSvgIcon } from "@mui/material/utils";

const Header = () => {
	const navigate = useNavigate();
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar variant='dense'>
					<IconButton edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }} onClick={() => navigate(`/`)}>
						<HomeIcon />
					</IconButton>
					<Typography variant='h6' color='inherit' component='div' onClick={() => navigate(`/add`)}>
						Add Product
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Header;
