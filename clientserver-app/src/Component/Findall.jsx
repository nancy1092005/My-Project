import axios from "axios";
 import { useState } from "react";
 import './Findall.css';

 export function Findall(){
    const [employees,setEmployees] = useState([]);
    async function FindAllHandler(e){
        e.preventDefault();
        try{
            const response = await axios.get("http://localhost:3002/api/employees");
            setEmployees(response.data);
        }
        catch(err){
            alert(err);
        }
    }
    return(
        <div className="find-all-container">
            <h2>Employee Records</h2>
            <hr/>
            <form onSubmit={FindAllHandler}>
                <button type="submit">Get All Records</button>
               
            </form>
        <div>
             <table className="employee-table">
                <thead>
                    <th>Id</th>
                    <th>No</th>
                    <th>Name</th>
                    <th>Sal</th>
                </thead>
                <tbody>
                    {
                      employees.length > 0?(
                        employees.map(emp =>(
                            <tr>
                            <td>{emp._id}</td>
                            <td>{emp.empNo}</td>
                            <td>{emp.empName}</td>
                            <td>{emp.empSal}</td>
                            </tr>
                        ))
                      ):<tr><td colSpan={'4'}> No Record</td></tr>
                    }
                    
                    
                </tbody>
                </table>
                </div>
             </div>
  )
}

export default Findall;