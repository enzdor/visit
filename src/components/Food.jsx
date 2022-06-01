import React from "react"
import Navigation from "./Navigation"
import Header from "./Header"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Container"
import Fade from "@mui/material/Fade"
import { useInView } from "react-intersection-observer"


export default function Food(){

	const [ref1, view1] = useInView({threshold: 0.3})
	const [ref2, view2] = useInView({threshold: 0.3})
	const [ref3, view3] = useInView({threshold: 0.3})
	const [ref4, view4] = useInView({threshold: 0.3})
	const [ref5, view5] = useInView({threshold: 0.3})
	const [ref6, view6] = useInView({threshold: 0.3})

	const foods = [
		{name: 'Amalur', img: 'ama.jpg', desc: 'The best view', ref: ref1, view: view1},
		{name: 'Bambuddha', img: 'bam.jpg', desc: 'Exotic', ref: ref2, view: view2},
		{name: 'La Llama', img: 'llama.jpg', desc: 'Enjoy meat', ref: ref3, view: view3},
		{name: 'Las Dos Lunas', img: 'lunas.jpg', desc: 'Great ambiance', ref: ref4, view: view4},
		{name: 'Noja', img: 'noja.jpg', desc: 'Exclusive', ref: ref5, view: view5},
		{name: 'La Torre', img: 'torre.jpg', desc: 'Relax', ref: ref6, view: view6}
	]

	return(
		<>
			<Header />
			<Navigation />
			<Box sx={{pt: {xs: '6rem', sm: '0'}, pb: {xs: '3rem', sm: '0'}, height: {sm: '50vh'}, width: '100vw', bgcolor: '#EBF5DF', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
				<Typography variant="h2" color="secondary">Food</Typography>
				<Typography variant="h4" color="primary">Discover what our cousine has to offer</Typography>
			</Box>
			<Box sx={{width: '100vw', bgcolor: '#EBF5DF'}}>
				<Grid container spacing={3} sx={{px: {xs: '5vw', md: '10vw'}}}>
					{
						foods.map((food) => (
							<Grid item xs={12} sm={6}>
								<Grid container sx={{backgroundColor: '#AA4465',}}>
									<Grid item xs={12} sm={6} sx={{position: 'relative', height: '40vh'}}>
										<Fade in={food.view}>
											<Box ref={food.ref} component="img" src={food.img} sx={{width: '100%', height: '100%', objectFit: 'cover'}} />
										</Fade>
									</Grid>
									<Grid item xs={12} sm={6} sx={{display: 'flex', alignItems: 'center'}}>
										<Stack>
											<Typography variant="h4" color="primary">{food.name}</Typography>
											<Typography variant="h6" color="#EBF5DF">{food.desc}</Typography>
										</Stack>
									</Grid>
								</Grid>
							</Grid>		
						))
					}
				</Grid>
			</Box>
		</>
	)
}
