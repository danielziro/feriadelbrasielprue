import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import Navigation from "./components/Navigation";
import CreateClothes from "./components/CreateClothes";
import ClothesList from "./components/ClothesList";

function App() {
  return (
  <Router>
    <Navigation/>
    <Routes>
    <Route path="/" exact Component={ClothesList}/>;
     <Route path="/edit/:id" Component={CreateClothes}/>;
     <Route path="/create" Component={CreateClothes}/> ;
     </Routes>
  </Router>
  
  );
}

export default App;
