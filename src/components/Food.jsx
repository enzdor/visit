import React, {useState}from "react"
import Navigation from "./Navigation"
import Header from "./Header"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import { useSpring, animated } from "react-spring"


const foods = [
	{name: 'Amalur', img: 'ama.jpg'},
	{name: 'Bambuddha', img: 'bam.jpg'},
	{name: 'La Llama', img: 'llama.jpg'},
	{name: 'Las Dos Lunas', img: 'lunas.jpg'},
	{name: 'Noja', img: 'noja.jpg'},
	{name: 'La Torre', img: 'torre.jpg'}
]


export default function Food(){
	const [current, setCurrent] = useState(0)

	return(
		<>
			<Header />
			<Navigation />
			<Box sx={{pt: {xs: '6rem', sm: '0'}, pb: {xs: '3rem', sm: '0'}, height: {sm: '50vh'}, width: '100vw', bgcolor: '#EBF5DF', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
				<Typography variant="h2" color="secondary">Food</Typography>
				<Typography variant="h4" color="primary">Discover what our cousine has to offer</Typography>
			</Box>
			<Box sx={{width: '100vw', bgcolor: '#EBF5DF'}}>
				<Grid container spacing={3}>
					{
						foods.map((food) => (
							<Grid item xs={12} sm={6} md={4}>
								<Container sx={{overflow: 'hidden', height: '50vh', position: 'relative', display: 'flex'}}>
									<Typography variant="h4" color="secondary" sx={{backgroundColor: '#EBF5DF', p: '1rem', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, 0%)'}}>{food.name}</Typography>
									<Box component="img" src={food.img} sx={{height: '100%', width: '100%', objectFit: 'cover'}}/>
								</Container>
							</Grid>		
						))
					}
				</Grid>
			</Box>
		</>
	)
}
