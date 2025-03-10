import axios from "axios";
import { useState,useEffect } from "react";

export async function fetch(){
        let d = (await axios.get('https://jsonplaceholder.typicode.com/todos'));
        return d
}