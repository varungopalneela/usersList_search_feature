import FetchData from "./FetchData";
import { useState,useEffect } from "react";

function DataDisplay({data}){
    return(
        <div style={{border:'5px solid black',marginTop : '10px'}}>
        <table>
          <thead>
              <tr>
                <th>S.NO</th>
                <th>Name</th>
                <th>Email</th>
                <th>City</th>
                <th>Phone No.</th>
                <th>Company Name</th>
              </tr>
          </thead>
          <tbody>
            {data?.map(obj=><tr key={obj.id}>
                <td>{obj.id}</td>
                <td>{obj.name}</td>
                <td>{obj.email}</td>
                <td>{obj.address.city}</td>
                <td>{obj.phone}</td>
                <td>{obj.company.name}</td>
            </tr>)}
          </tbody>
        </table>
      </div>
    
    )
}

export default DataDisplay;
