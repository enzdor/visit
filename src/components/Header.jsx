import React from "react"
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography"

export default function Header(){
	return(
		<>
			<Grid container sx={{position: 'absolute', top: '0', left: '0'}}>
				<Grid item xs={6}>
					<Typography variant="h4" sx={{mx: '1rem'}}>Ibiza</Typography>
				</Grid>
			</Grid>
		</>
	)
}
