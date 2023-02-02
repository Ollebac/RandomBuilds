import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Homepage from './Homepage/Homepage';
import Potionomics from './Potionomics/Potionomics';
import SearchList from "./SearchList/SearchList";
import MyGear from "./MyGear/MyGear";

import './App.css';

function App() {
  return (
    <Router>
      <span className="home_container">
        <a className="home_link" href="/">To Home</a>
      </span>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/potionomics" element={<Potionomics />} />
        <Route path="/searchlist" element={<SearchList />} />
        <Route path="/mygear" element={<MyGear />} />
      </Routes>
    </Router>
  );
}

export default App;
