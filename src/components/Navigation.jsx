import React, { useState }from "react"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import AdjustIcon from "@mui/icons-material/Adjust"
import Typography from "@mui/material/Typography"
import MenuIcon from "@mui/icons-material/Menu"
import {animated, useSpring} from "react-spring"

export default function Navigation(){
	const [open, setOpen] = useState(false)
	const AnimatedBox = animated(Box)

	const spring = useSpring({left: open ? '0' : '-100vw'})
	return(
		<>
			<MenuIcon onClick={() => setOpen(!open)} fontSize="large" sx={{cursor: 'pointer', position: 'absolute', top: '0', right: '0', mx: '1rem', my: '0.5rem', zIndex: '20'}} />
			<AnimatedBox style={spring} sx={{height: '100vh', position: 'absolute', top: '0', left: '0', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.8)'}}>
				<Stack spacing={3} sx={{mx: '1rem'}}>
					<Stack direction="horizontal" sx={{display: 'flex', alignItems: 'center'}}>
						<AdjustIcon />
						<Typography variant="h6">Navigation option</Typography>
					</Stack>
					<Stack direction="horizontal" sx={{display: 'flex', alignItems: 'center'}}>
						<AdjustIcon />
						<Typography variant="h6">Navigation option</Typography>
					</Stack>
					<Stack direction="horizontal" sx={{display: 'flex', alignItems: 'center'}}>
						<AdjustIcon />
						<Typography variant="h6">Navigation option</Typography>
					</Stack>
				</Stack>
			</AnimatedBox>
		</>
	)
}
