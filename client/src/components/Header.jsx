import { Link } from "react-router-dom";
import logo from "../assets/Logo1.jpg";
import * as React from "react";

// importing material UI components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export const Header=()=>{
return (
	<AppBar position="static">
		<Toolbar>

	

		<Typography variant="h6"
			component="div" sx={{ flexGrow: 1 }}>
			Personal Finance Tracker
		</Typography>
		</Toolbar>
	</AppBar>
);
}
