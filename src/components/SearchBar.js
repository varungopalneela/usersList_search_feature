import { useState } from "react";

function SearchBar({data,setData}){
    let changed=(obj)=>{
        let text = obj.target.value
        let p = data.filter(obj =>obj.name.toLowerCase().startsWith(text.toLowerCase()))
        setData(p)
    }
    return(
        <div>
            <label>Search</label>
            <input onChange={(obj)=>changed(obj)} type='text' id='search'/>
        </div>
    )
}

export default SearchBar;
