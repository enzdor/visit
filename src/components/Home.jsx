import React, {useEffect} from "react";
import Header from "./Header"
import Navigation from "./Navigation"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import Hidden from "@mui/material/Hidden"
import Fade from "@mui/material/Fade"
import Grow from "@mui/material/Grow"
import { useInView } from "react-intersection-observer"

export default function Home(){
	useEffect(() => {
		document.querySelector("video").play()
	}, [])

	const [ref1, inView1] = useInView({threshold: 0.4})
	const [ref2, inView2] = useInView({threshold: 0.2})

	return(
		<>
			<Header />
			<Navigation />
			<Box component="video" src="ibicom.mp4" playsinline muted autoplay loop sx={{position: 'absolute', top: '0', left: '0', height: '100vh', width: '100vw', objectFit: 'cover', zIndex: '-1'}}/>
			<Container sx={{height: '100vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
				<Typography variant="h2" color="white">Make your dreams come true</Typography>	
			</Container>
			<Box ref={ref1} sx={{height: {md: '100vh'}, width: '100vw', bgcolor: '#EBF5DF'}}>
				<Grid container sx={{width: {xs: '90%', md: '80%'}, margin: 'auto'}}>
					<Grid item xs={12} sm={7} sx={{p: '1rem', display: 'flex', justifyContent: 'center', height: {md: '100vh'}, flexDirection: 'column'}}>
						<Stack spacing={3} sx={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
							<Stack spacing={1}>
								<Typography variant="h2" color="primary">Live your dreams</Typography>
								<Typography variant="h4" color="secondary" sx={{lineHeight: 'normal'}}>Share an unforgettable experience with somebody you love. Don't miss this chance.</Typography>
							</Stack>
							<Hidden smDown>
								<Fade in={inView1}>
									<Box component="img" src="party.jpg" sx={{width: '80%', objectFit: 'cover', alignSelf: 'flex-start'}} />
								</Fade>
							</Hidden>
						</Stack>
					</Grid>
					<Grid item xs={12} sm={5} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
						<Fade in={inView1}>
							<Box component="img" src="woman.jpg" sx={{width: '80%', objectFit: 'cover'}} />
						</Fade>
					</Grid>
				</Grid>
			</Box>
			<Box ref={ref2} sx={{height: {sm: '80vh'}, width: '100vw', overflow: 'hidden', bgcolor: '#EBF5DF'}}>
				<Grid container>
					<Grow in={inView2}>
					<Grid item xs={12} sm={4} sx={{position: 'relative'}}>
						<Stack sx={{transform: 'translate(-50%, -50%)', zIndex: '3', position: 'absolute', left: '50%', top: '50%'}}>
							<Typography variant="h2" color="primary">Nature</Typography>
							<Typography variant="h4" color="secondary">Explore it</Typography>
						</Stack>
						<Box component="img" src="hike.jpg" sx={{height: '80vh', objectFit: 'cover', filter: 'grayscale(90%)'}} />
					</Grid>
					</Grow>
					<Grow in={inView2}>
					<Grid item xs={12} sm={4} sx={{position: 'relative'}}>
						<Stack sx={{transform: 'translate(-50%, -50%)', zIndex: '3', position: 'absolute', left: '50%', top: '50%'}}>
							<Typography variant="h2" color="primary">Sea</Typography>
							<Typography variant="h4" color="secondary">Enjoy it</Typography>
						</Stack>
						<Box component="img" src="city.jpg" sx={{height: '80vh', objectFit: 'cover', filter: 'grayscale(90%)'}} />
					</Grid>
					</Grow>
					<Grow in={inView2}>
					<Grid item xs={12} sm={4} sx={{position: 'relative'}}>
						<Stack sx={{transform: 'translate(-50%, -50%)', zIndex: '3', position: 'absolute', left: '50%', top: '50%'}}>
							<Typography variant="h2" color="primary">City</Typography>
							<Typography variant="h4" color="secondary">Discover it</Typography>
						</Stack>
						<Box component="img" src="sea.jpg" sx={{height: '80vh', objectFit: 'cover', filter: 'grayscale(90%)'}} />
					</Grid>
					</Grow>
				</Grid>
			</Box>
		</>
	)
}
