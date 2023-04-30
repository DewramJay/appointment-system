
import * as React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import HomeStudent from './Pages/HomeStudent';


import LoginPage from './Authentication/LoginPage';
import HomePage from './Authentication/HomePage';
import SAccountPage from './Pages/SAccountPage';
import AddStudent from './Pages/Admin/AddStudent';



export default function Test() {
  return (
    
      <div>
            <Router>
             
  
          <Routes>
            <Route exact path="/" element={<HomePage/>}>
             
            </Route>
  
            <Route path="/login"  element={< LoginPage/>}>
            </Route>
  
            <Route path="/homestudent" element={<HomeStudent/>} >
            </Route>

            <Route path="/saccountpage" element={<SAccountPage/>} >
            </Route>

            <Route path="/AddStudent" element={<AddStudent/>} >
            </Route>


          </Routes>
  
      </Router>
        
      </div>
  );
}