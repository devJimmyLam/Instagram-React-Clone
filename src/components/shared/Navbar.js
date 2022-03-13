import React, {useState} from "react";
import { useNavbarStyles } from "../../styles";
import { Link } from 'react-router-dom';
import logo from'../../images/logo2.png';
import {
	AppBar,
	Hidden,
	InputBase,
} from "@material-ui/core";
import {
	LoadingIcon,

} from "../../icons";

function Navbar({minimalNavbar}) {
	const classes = useNavbarStyles();

	return (
		<AppBar className={classes.appBar}>
			<section className={classes.section}>
				<Logo />
				{!minimalNavbar && (
					<>
						<Search />
						<Links />
					</>
				)}
			</section>
		</AppBar>
	)
}

function Logo(){
	const classes = useNavbarStyles()
	
	return(
		<div className={classes.logoContainer}>
			<Link to="/">
				<div className={classes.logoWrapper}>
					<img src={logo} alt="PhotoGram" className={classes.logo} />
				</div>
			
			</Link>
		</div>
	)
}

function Search(){
	const classes = useNavbarStyles()
	const [query, setQuery] = useState('')

	let loading = false;

	function handleClearInput(){
		setQuery('')
	};

	return(
		<Hidden only="xs">
			<InputBase 
				className={classes.input}
				onChange={event => setQuery (event.target.value)}
				startAdornment={<span className={classes.searchIcon}/>}
				endAdornment={
					loading?(
						<LoadingIcon/>
					):(
						<span onClick={handleClearInput} className={classes.clearIcon}/>
					)
				}
				placeholder="Sarch"
				value={query}
			/>
		</Hidden>
	)
}

function Links(){
	return(
		<div>
			Links
		</div>
	)
}

export default Navbar;