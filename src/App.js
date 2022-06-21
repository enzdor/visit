import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Hotels from "./components/Hotels";
import Food from "./components/Food";


function App() {
  return (
	<Routes>
	    <Route path="/" element={<Home />} />
	    <Route path="/hotels" element={<Hotels />} />
	    <Route path="/food" element={<Food />} />
	</Routes>
  );
}

export default App;
