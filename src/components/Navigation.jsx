import React from "react"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import AdjustIcon from "@mui/icons-material/Adjust"

export default function Navigation(){
	return(
		<Box sx={{height: '100vh', position: 'absolute', top: '0', left: '0', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
			<Stack>
				<AdjustIcon />
				<AdjustIcon />
			</Stack>
		</Box>
	)
}
