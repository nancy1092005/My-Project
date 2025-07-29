import React,{useState} from "react";
import axios from 'axios';
import './Add.css';

export default function Add(){
    const [empNo, setEmpNo]= useState("");
    const [empName, setEmpName]= useState("");
    const [empSal, setEmpSal]= useState("");

    async function addHandler(e)
    {
        e.preventDefault();
        try
        {
           const response = await axios.post('http://localhost:3002/api/employees',
            {empNo,empName,empSal});
            alert(response.data.message);
        }
        catch(err)
        {
            alert(err);
        }
    }
    return (
        <div className="Add">
            <h2 className="form-heading">Add Portal</h2>

            <form onSubmit={addHandler}>
                
                <input
                type="text"
                placeholder="Emp No"
                value={empNo}
                onChange={(e)=> setEmpNo(e.target.value)}/>
                <br></br>


                <input
                type="text"
                placeholder="Emp Name"
                value={empName}
                onChange={(e)=> setEmpName(e.target.value)}/>
                <br></br>
              
                <input
                type="salary"
                placeholder="Salary"
                value={empSal}
                onChange={(e)=> setEmpSal(e.target.value)}/>

                <br></br>
                <input type="submit" value="Submit"/>


            </form>
        </div>
    )





}