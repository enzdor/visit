import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material"

const theme = createTheme({
	palette: {
		primary: {
			main: '#E8871E'
		},
		secondary: {
			main: '#AA4465'
		},
		info: {
			main: '#EBF5DF'
		}
	}
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Router>
		<React.StrictMode>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</React.StrictMode>
	</Router>
);

