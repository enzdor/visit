import React,{useState, useEffect} from "react"
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
	const [viewed1, setViewed1] = useState(false);
	useEffect(() => {
	    if (view1 === true){
		setViewed1(true);
	    }
	}, [view1])

	const [ref2, view2] = useInView({threshold: 0.3})
	const [viewed2, setViewed2] = useState(false);
	useEffect(() => {
	    if (view2 === true){
		setViewed2(true);
	    }
	}, [view2])

	const [ref3, view3] = useInView({threshold: 0.3})
	const [viewed3, setViewed3] = useState(false);
	useEffect(() => {
	    if (view3 === true){
		setViewed3(true);
	    }
	}, [view3])

	const [ref4, view4] = useInView({threshold: 0.3})
	const [viewed4, setViewed4] = useState(false);
	useEffect(() => {
	    if (view4 === true){
		setViewed4(true);
	    }
	}, [view4])

	const [ref5, view5] = useInView({threshold: 0.3})
	const [viewed5, setViewed5] = useState(false);
	useEffect(() => {
	    if (view5 === true){
		setViewed5(true);
	    }
	}, [view5])

	const [ref6, view6] = useInView({threshold: 0.3})
	const [viewed6, setViewed6] = useState(false);
	useEffect(() => {
	    if (view6 === true){
		setViewed6(true);
	    }
	}, [view6])

	const foods = [
		{name: 'Amalur', img: 'ama.jpg', desc: 'The best view', ref: ref1, view: view1, viewed: viewed1},
		{name: 'Bambuddha', img: 'bam.jpg', desc: 'Exotic', ref: ref2, view: view2, viewed: viewed2},
		{name: 'La Llama', img: 'llama.jpg', desc: 'Enjoy meat', ref: ref3, view: view3, viewed: viewed3},
		{name: 'Las Dos Lunas', img: 'lunas.jpg', desc: 'Great ambiance', ref: ref4, view: view4, viewed: viewed4},
		{name: 'Noja', img: 'noja.jpg', desc: 'Exclusive', ref: ref5, view: view5, viewed: viewed5},
		{name: 'La Torre', img: 'torre.jpg', desc: 'Relax', ref: ref6, view: view6, viewed: viewed6}
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
										<Fade in={food.view || food.viewed}>
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
