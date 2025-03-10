import FetchData from "./FetchData";
import { useState,useEffect } from "react";

function DataDisplay2({data}){
    return(
        <div>
        <table style={{border:'5px solid black',marginTop : '10px'}}>
          <thead>
              <tr>
                <th>S.NO</th>
                <th>User Id</th>
                <th>Title</th>
                <th>Completed</th>
                
              </tr>
          </thead>
          <tbody>
            {data?.map(obj=>
                 <tr key={obj.id}>
                <td>{obj.id}</td>
                <td>{obj.userId}</td>
                <td>{obj.title}</td>
                <td>{obj.completed?"Yes":"No"}</td>
            
            </tr>)}
          </tbody>
        </table>
      </div>
    
    )
}

export default DataDisplay2;
