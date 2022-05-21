import React, {useEffect} from "react";
import Header from "./Header"
import Navigation from "./Navigation"
import Box from "@mui/material/Box"

export default function Home(){
	useEffect(() => {
		document.querySelector("video").play()
	}, [])

	return(
		<>
			<Header />
			<Navigation />
			<Box component="video" src="ibicom.mp4" playsinline muted autoplay loop sx={{position: 'absolute', top: '0', left: '0', height: '100vh', width: '100vw', objectFit: 'cover'}}/>
		</>
	)
}
