import React, {useEffect} from "react";
import Header from "./Header"
import Navigation from "./Navigation"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import Hidden from "@mui/material/Hidden"

export default function Home(){
	useEffect(() => {
		document.querySelector("video").play()
	}, [])

	return(
		<>
			<Header />
			<Navigation />
			<Box component="video" src="ibicom.mp4" playsinline muted autoplay loop sx={{position: 'absolute', top: '0', left: '0', height: '100vh', width: '100vw', objectFit: 'cover', zIndex: '-1'}}/>
			<Container sx={{height: '100vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
				<Typography variant="h2" color="white">Make your dreams come true</Typography>	
			</Container>
			<Box sx={{height: {md: '100vh'}, width: '100vw', bgcolor: '#EBF5DF'}}>
				<Grid container sx={{width: {xs: '90%', md: '80%'}, margin: 'auto'}}>
					<Grid item xs={12} sm={7} sx={{p: '1rem', display: 'flex', justifyContent: 'center', height: {md: '100vh'}, flexDirection: 'column'}}>
						<Stack spacing={3} sx={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
							<Stack spacing={1}>
								<Typography variant="h2" color="primary">Live your dreams</Typography>
								<Typography variant="h4" color="secondary" sx={{lineHeight: 'normal'}}>Share an unforgettable experience with somebody you love. Don't miss this chance.</Typography>
							</Stack>
							<Hidden smDown>
								<Box component="img" src="party.jpg" sx={{width: '80%', objectFit: 'cover', alignSelf: 'flex-start'}} />
							</Hidden>
						</Stack>
					</Grid>
					<Grid item xs={12} sm={5} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
						<Box component="img" src="woman.jpg" sx={{width: '80%', objectFit: 'cover'}} />
					</Grid>
				</Grid>
			</Box>
		</>
	)
}
