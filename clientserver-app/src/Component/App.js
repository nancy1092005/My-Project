import React from "react";
import {NavLink,Routes,Route} from "react-router-dom";
import Add from './Add';
import {Findall } from "./Findall";
 import{Find} from './Find';
 import { Delete } from './Delete';
import { Update } from './Update';
import './App.css';

 function App(){
    return(
        <div  class>
            <h1> Employee Management System </h1>
        <nav >
        <NavLink to={"/Add"} >Add</NavLink>
        <NavLink to={"/Update"}  >Update</NavLink>
        <NavLink to={"/Delete" } >Delete</NavLink>
        <NavLink to={"/Find"} >Find</NavLink>
        <NavLink to={"/Findall"} >Findall</NavLink>
        </nav>
    

      
        <Routes>
        <Route path="/Add" element={<Add />} />
        <Route path="/Update" element={<Update />} />
        <Route path="/Delete" element={<Delete />} />
        <Route path="/Find" element={<Find/>} />
        <Route path="/Findall" element={<Findall />} />
        </Routes>
        </div>
        
    )
}

export default App;