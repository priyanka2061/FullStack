
"use client"
import React, { useState } from 'react';
 import './styles/page.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import data from './hello/data3'



const Home = () => {
  // const [data,setData]=useState([]);
  const [searchItem,setSearchItem]=useState();
const data1=[
 {bf:'ayush'},{bf:'ayush1'},{bf:'ayush12}'
]
  // const getTickers=(searchitem)=>{
  //    axios.get('/hello/data3')
  //   .then((res)=>{
  //     setData(res.data);
  //   })
  //   .catch((err)=>{
  //     console.log(err);
  //   })
  // }
console.log(data);
  return (
    <div>
    <div className="input-container">
      <p>GrowwStonks</p>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="increase-icon">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
  </svg>
  <div>
  <div style={{background:"red"}}>
      <input 
      type="text" 
      placeholder="Search..." 
      // onChange={(e)=>getTickers(e.target.value)}
       value={searchItem}
      name={searchItem}/>
      { <FontAwesomeIcon icon={faSearch} className="search-icon" /> }
      {data1.map((item,index)=>
      <div key={index} style={{background:"pink"}}>
          <h2>{item.name}</h2>
        
         </div>
         )}
      </div>
      
      </div>
    </div>
    </div>
  );
};

export default Home;

