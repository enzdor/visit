import React from "react";
import Header from "./Header"
import Navigation from "./Navigation"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"

export default function Home(){
	return(
		<>
			<Header />
			<Navigation />
			<Box component="img" src="/home.webp" sx={{height: '100vh', width: '100vw', objetFit:'cover', position: 'absolute', top: '0', right: '0', zIndex: '-1'}}/>

		</>
	)
}
