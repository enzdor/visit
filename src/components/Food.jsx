import React, {useState}from "react"
import Navigation from "./Navigation"
import Header from "./Header"
import Box from "@mui/material/Box"
import Fade from "@mui/material/Fade"
import Hidden from "@mui/material/Hidden"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import { useSpring, animated } from "react-spring"

export default function Food(){
	const [current, setCurrent] = useState(0)

	return(
		<>
			<Header />
			<Navigation />
			<Box sx={{height: {sm: '100vh'}, width: '100vw', bgcolor: '#EBF5DF', position: 'relative', overflow: 'hidden'}}>
			</Box>
		</>
	)
}
