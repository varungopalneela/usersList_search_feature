import logo from './logo.svg';
import './App.css';
import SearchBar2 from './components/SearchBar';
import DataDisplay2 from './components/DataDisplay';
import { fetch } from './components/FetchData';
import { useState ,  useEffect } from 'react';
import axios from 'axios';

function App() {
  let [data,setData] = useState([]);
  let [fulldata,setFullData] = useState([])
  useEffect(()=>
    {
     let t = fetch().then(obj=> {setData(obj.data); setFullData(obj.data)})
    }
    ,[])
  
  return (
    <div className="App">
      <h1>Data of the users</h1>
      <SearchBar2 data={fulldata} setData={setData}/>
      <DataDisplay2 data={data}/>
      {/* <div>
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
      </div> */}
    </div>
  );
}

export default App;
