import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Hotels from "./components/Hotels";

function App() {
  return (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/hotels" element={<Hotels />} />
	</Routes>
  );
}

export default App;
