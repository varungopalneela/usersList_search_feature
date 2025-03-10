import { useState } from "react";

function SearchBar2({data,setData}){
    let changed=(obj)=>{
        let text = obj.target.value
        let p = data.filter(obj =>obj.title.startsWith(text))
        setData(p)
    }
    return(
        <div>
            <label>Search</label>
            <input onChange={(obj)=>changed(obj)} type='text' id='search'/>
        </div>
    )
}

export default SearchBar2;
