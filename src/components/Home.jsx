import React from "react";
import Header from "./Header"
import Navigation from "./Navigation"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import CardMedia from "@mui/material/CardMedia"

export default function Home(){
	return(
		<>
			<Header />
			<Navigation />
			<video autoplay loop>
				<source src="/ibicom.mp4" />
			Sorry your browser does not support embedded videos.
			</video>
		</>
	)
}
