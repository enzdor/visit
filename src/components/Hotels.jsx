import React from "react"
import Header from "./Header"
import Navigation from "./Navigation"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Fade from "@mui/material/Fade"
import { useInView } from "react-intersection-observer"

export default function Hotels(){

	const [ref1, view1] = useInView({threshold: 0.3})
	const [ref2, view2] = useInView({threshold: 0.3})
	const [ref3, view3] = useInView({threshold: 0.3})
	const [ref4, view4] = useInView({threshold: 0.3})

	return(
		<>
			<Header />
			<Navigation />
			<Box sx={{width: '100vw', bgcolor: '#EBF5DF'}}>
				<Grid container sx={{width: '100vw'}}>
					<Grid item xs={12} sm={6} sx={{height: {sm: '90vh'}, width: '100vw', display: 'flex', alignItems: 'center'}}>
						<Stack spacing={1} sx={{p: '2rem', pt: '4rem'}}>
							<Typography variant="h2" color="secondary">Hotels</Typography>
							<Typography variant="h4" color="primary">There are a wide range of hotels on our island that you will love</Typography>
						</Stack>
					</Grid>
					<Grid item xs={12} sm={6} sx={{height: {sm: '90vh'}, width: {sm: '50vw'}}}>
						<Fade in={view1}>
							<Box ref={ref1} component="img" src="party.jpg" sx={{width: {xs: '100vw', sm: '50vw'}, height: {sm: '90vh'}, objectFit: 'cover', alignSelf: 'flex-start'}} />
						</Fade>
					</Grid>
					<Grid item xs={12} sm={6} sx={{height: {sm: '90vh'}, width: {sm: '50vw'}}}>
						<Fade in={view2}>
							<Box ref={ref2} component="img" src="usu1.jpg" sx={{width: {xs: '100vw', sm: '50vw'}, height: {sm: '90vh'}, objectFit: 'cover', alignSelf: 'flex-start'}} />
						</Fade>
					</Grid>
					<Grid item xs={12} sm={6} sx={{bgcolor: '#E8871E', height: {sm: '90vh'}, display: 'flex', alignItems: 'center'}}>
						<Stack spacing={1} sx={{p: '2rem'}}>
							<Typography variant="h2" color="#EBF5DF">Ushuaia</Typography>
							<Typography variant="h4" color="secondary">The best place to have fun!</Typography>
						</Stack>
					</Grid>
					<Grid item xs={12} sm={6} sx={{bgcolor: '#AA4465', height: {sm: '90vh'}, display: 'flex', alignItems: 'center'}}>
						<Stack spacing={1} sx={{p: '2rem'}}>
							<Typography variant="h2" color="primary">Can LLuc</Typography>
							<Typography variant="h4" color="#EBF5DF">Relax and reconnect with nature</Typography>
						</Stack>
					</Grid>
					<Grid item xs={12} sm={6} sx={{height: {sm: '90vh'}, width: {sm: '50vw'}}}>
						<Fade in={view3}>
							<Box ref={ref3} component="img" src="can1.webp" sx={{width: {xs: '100vw', sm: '50vw'}, height: {sm: '90vh'}, objectFit: 'cover', alignSelf: 'flex-start'}} />
						</Fade>
					</Grid>
					<Grid item xs={12} sm={6} sx={{height: {sm: '90vh'}, width: {sm: '50vw'}}}>
						<Fade in={view4}>
							<Box ref={ref4} component="img" src="gran1.webp" sx={{width: {xs: '100vw', sm: '50vw'}, height: {sm: '90vh'}, objectFit: 'cover', alignSelf: 'flex-start'}} />
						</Fade>
					</Grid>
					<Grid item xs={12} sm={6} sx={{height: {sm: '90vh'}, display: 'flex', alignItems: 'center'}}>
						<Stack spacing={1} sx={{p: '2rem'}}>
							<Typography variant="h2" color="secondary">Gran Hotel</Typography>
							<Typography variant="h4" color="primary">Enjoy luxury and feel at home</Typography>
						</Stack>
					</Grid>
				</Grid>
			</Box>
		</>
	)
}
