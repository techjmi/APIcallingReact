// import React from "react"
import "./state.css"
 import React, { useState, useEffect } from 'react';

const StateWise=()=>{
  const [data, setData] =useState([]);
   const getCovid= async()=>{
  const res= await fetch("https://data.covid19india.org/v4/min/data.min.json")
      const resData= await res.json() //convert in js object
      console.log(resData.BR);
     setData(resData.BR)
     // setData(Object.values(resData.BR.districts));

    }
    useEffect(()=>{
      getCovid()
    },[])
  return(
    <>
     
      <div className='container-fluid mt-3'>
        <div className='main-heading'>
           <h1 className='mb-2 text-center'>Bihar Covid-19 Dashboard</h1>
        </div>
        <div className='table-responsive'>
         <table className='table table-hover'>
           <thead className="thead-dark">
             <tr>
               <th>
                 district
               </th>
               <th>
                 confirmed
                  </th>
               <th>
                 recoverd
                  </th>
               <th>
                 Active
                   </th>
               <th>
                 Death
                    </th>
               
             </tr>
           </thead>
           <tbody>
             {data.districts &&
             Object.keys(data.districts).map((currE, index) => {
               const districtData = data.districts[currE];
               const total = districtData.total || { confirmed: 0, recovered: 0, deceased: 0 }; //check condition if false set this value
                 return (
                   <tr key={index}>
                     <td>{currE}</td>
                     <td>{total.confirmed}</td>
                     <td>{total.recovered}</td>
                     <td>{total.confirmed - total.recovered}</td>
                     <td>{total.deceased}</td>
                   </tr>
                 );
               })
             }


             </tbody>
         </table>
        
        </div>
      </div>
    </>
  )
}
export default StateWise;