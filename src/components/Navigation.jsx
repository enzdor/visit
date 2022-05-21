import React, { useState }from "react"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Grid from "@mui/material/Grid"
import AdjustIcon from "@mui/icons-material/Adjust"
import Typography from "@mui/material/Typography"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import Fade from "@mui/material/Fade"
import Grow from "@mui/material/Grow"
import {animated, useSpring} from "react-spring"

export default function Navigation(){
	const [open, setOpen] = useState(false)
	const [image, setImage] = useState('base')
	const AnimatedTypography = animated(Typography)
	const AnimatedBox = animated(Box)

	const spring = useSpring({left: open ? '0' : '-100vw'})
	const springEat = useSpring({color: image === "eat" ? "blue" : "black"}) 
	const springGo = useSpring({color: image === "go" ? "blue" : "black"}) 
	const springHotel = useSpring({color: image === "hotel" ? "blue" : "black"}) 
	return(
		<>
		{ open
			? <CloseIcon onClick={() => setOpen(!open)} fontSize="large" sx={{cursor: 'pointer', position: 'absolute', top: '0', right: '0', mx: '1rem', my: '0.5rem', zIndex: '20'}} />
			: <MenuIcon onClick={() => setOpen(!open)} fontSize="large" sx={{cursor: 'pointer', position: 'absolute', top: '0', right: '0', mx: '1rem', my: '0.5rem', zIndex: '20'}} />
		}
			
			<AnimatedBox style={spring} sx={{width: '100vw', height: '100vh', position: 'absolute', top: '0', left: '0', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.8)'}}>
			<Grid container>
				<Grid item xs={5} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
					<Stack spacing={3} sx={{mx: '1rem'}}>
						<Stack direction="horizontal" onMouseLeave={() => setImage('base')} onMouseEnter={() => setImage('eat')} sx={{display: 'flex', alignItems: 'center'}}>
							<AnimatedTypography style={springEat} variant="h4" sx={{cursor: 'pointer'}}>FOOD</AnimatedTypography>
						</Stack>
						<Stack direction="horizontal" onMouseLeave={() => setImage('base')} onMouseEnter={() => setImage('go')} sx={{display: 'flex', alignItems: 'center'}}>
							<AnimatedTypography style={springGo} variant="h4" sx={{cursor: 'pointer'}}>VISIT</AnimatedTypography>
						</Stack>
						<Stack direction="horizontal" onMouseLeave={() => setImage('base')} onMouseEnter={() => setImage('hotel')} sx={{display: 'flex', alignItems: 'center'}}>
							<AnimatedTypography style={springHotel} variant="h4" sx={{cursor: 'pointer'}}>HOTELS</AnimatedTypography>
						</Stack>
					</Stack>
				</Grid>
				<Grid item xs={7} >
					{ image === "eat" 
						? <Fade in={image === "eat"}><Box component="img" src="/salvia.jpg" sx={{height: "70vh", width: "70vh", objectFit: 'cover'}}/></Fade>
						:  image === "go" 
							? <Fade in={image === "go"}><Box component="img" src="/beach.webp" sx={{height: "70vh", width: "70vh", objectFit: 'cover'}}/></Fade>
							: image === "hotel"
								? <Fade in={image === "hotel"}><Box component="img" src="/hotel.jpg" sx={{height: "70vh", width: "70vh", objectFit: 'cover'}}/></Fade>
								: <Box component="img" src="/base.jpeg" sx={{height: "70vh", width: "70vh", objectFit: 'cover'}}/>
					}
				</Grid>
			</Grid>
			</AnimatedBox>
		</>
	)
}
