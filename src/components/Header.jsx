import React from "react"
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography"
import { useNavigate } from "react-router-dom"

export default function Header(){
	const navigate = useNavigate()

	return(
		<>
			<Grid container sx={{position: 'absolute', top: '0', left: '0', zIndex: '10'}}>
				<Grid item xs={6}>
					<Typography onClick={() => navigate('/')}variant="h3" sx={{mx: '1rem', cursor: 'pointer'}}>Ibiza</Typography>
				</Grid>
			</Grid>
		</>
	)
}
