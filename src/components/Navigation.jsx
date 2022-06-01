import React, { useState }from "react"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import Fade from "@mui/material/Fade"
import Hidden from "@mui/material/Hidden"
import {animated, useSpring} from "react-spring"
import { useNavigate } from "react-router-dom"

export default function Navigation(){
	const navigate = useNavigate()
	const [open, setOpen] = useState(false)
	const [image, setImage] = useState('base')
	const AnimatedTypography = animated(Typography)
	const AnimatedBox = animated(Box)

	const spring = useSpring({left: open ? '0' : '-100vw'})
	const springEat = useSpring({color: image === "eat" ? "#AA4465" : "black"}) 
	const springGo = useSpring({color: image === "go" ? "#AA4465" : "black"}) 
	const springHotel = useSpring({color: image === "hotel" ? "#AA4465" : "black"}) 
	return(
		<>
		{ open
			? <CloseIcon onClick={() => setOpen(!open)} fontSize="large" sx={{cursor: 'pointer', position: 'absolute', top: '0', right: '0', mx: '1rem', my: '0.5rem', zIndex: '20'}} />
			: <MenuIcon onClick={() => setOpen(!open)} fontSize="large" sx={{cursor: 'pointer', position: 'absolute', top: '0', right: '0', mx: '1rem', my: '0.5rem', zIndex: '20'}} />
		}
			
			<AnimatedBox style={spring} sx={{position: 'fixed', zIndex: '2', width: '100vw', height: '100vh', top: '0', left: '0', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(235, 245, 233, 0.95)'}}>
				<Grid container>
					<Grid item xs={12} sm={5} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
						<Stack spacing={3} sx={{mx: '1rem'}}>
								<AnimatedTypography onClick={() => navigate('/food')}onMouseLeave={() => setImage('base')} onMouseEnter={() => setImage('eat')} style={springEat} variant="h4" sx={{cursor: 'pointer'}}>FOOD</AnimatedTypography>
								<AnimatedTypography onClick={() => navigate('/visit')} onMouseLeave={() => setImage('base')} onMouseEnter={() => setImage('go')} style={springGo} variant="h4" sx={{cursor: 'pointer'}}>VISIT</AnimatedTypography>
								<AnimatedTypography onClick={() => navigate('/hotels')} onMouseLeave={() => setImage('base')} onMouseEnter={() => setImage('hotel')} style={springHotel} variant="h4" sx={{cursor: 'pointer'}}>HOTELS</AnimatedTypography>
						</Stack>
					</Grid>
					<Hidden smDown open>
						<Grid item xs={7} sx={{overflow: 'hidden'}}>
							{ !open 
								? <></>
								: image === "eat" 
									? <Fade in={image === "eat"}><Box component="img" src="/salvia.jpg" sx={{height: "70vh", width: "70vh", objectFit: 'cover'}}/></Fade>
									:  image === "go" 
										? <Fade in={image === "go"}><Box component="img" src="/beach.webp" sx={{height: "70vh", width: "70vh", objectFit: 'cover'}}/></Fade>
										: image === "hotel"
											? <Fade in={image === "hotel"}><Box component="img" src="/hotel.jpg" sx={{height: "70vh", width: "70vh", objectFit: 'cover'}}/></Fade>
											: <Box component="img" src="/base.jpeg" sx={{height: "70vh", width: "70vh", objectFit: 'cover'}}/>
							}
						</Grid>
					</Hidden>
				</Grid>
			</AnimatedBox>
		</>
	)
}
