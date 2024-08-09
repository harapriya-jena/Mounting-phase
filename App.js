import React, { useEffect, useState } from "react";
function App(){

  const[data,setData]=useState([]);
  const url="https://fakestoreapi.com/products"

  useEffect(()=>{
  async function FetchApi(){
    const response= await fetch(url);
    const data= await response.json();
    setData(data);
    console.log(data);
  }

  FetchApi();
},[]);

  return(
    
    <div>
           <div style={{ backgroundColor: "#a2b9bc", minHeight: "100vh", padding: "20px" }}>
      <h1 align="center">Welcome to my website</h1>
      <div
      style={{

      display: 'flex',         
     flexWrap: 'wrap',        
     gap:"20px",
     justifyContent: 'center',
     
      }}>
      {data.map((product)=>(
        <div
        key={product.id}
        
        style={{
         
          display:"inline-block",
          border:"1px solid black",
          height:"500px" ,
          width:"500px",
          marginBottom:"20px",
          padding:"20px",
          backgroundColor:"#b2ad7f",
          borderRadius:"10px",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: 'space-between',
          
  
          
          

        }}
        
        >
          <h1>{product.title}</h1>
         
          <img src={product.image} style={{ height:"100px" , width:"90px", display:"block", margin:"auto",backgroundColor:"#b2ad7f",
            mixBlendMode: 'multiply'
          }}></img>
          <p>Price:{product.price}</p>
          
          <p><strong>Description: </strong>
            {product.description}</p>
               
        </div>
      ))}
    </div>
    </div>
    </div>
    
  );
}
export default App;