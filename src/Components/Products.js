
import React, { useEffect, useState } from "react";
import FilterBox from "./FilterBox";
import ItemsData from "./ItemsData.json";

function Products(){
  
        return(
            <div style={{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"}}>
            <FilterBox />
        {ItemsData.map(product => {

              return (
                <div key={product.id} style={{display:"flex",justifyContent:"space-evenly",marginTop:"60px",flexWrap:"wrap"}}>
                <div className="sub-div1">
               <img src={product.imageURL} alt="image" style={{width:"300px",height:"200px",display:"flex"}} /> 
            <div>
                  <h3 >{ product.name}</h3>
                  <br />
                  <p >{ product.category }</p>
                  <p >Rs.{ product.price }</p>
                  <p>{(product.available !== 0) ? <><label style={{marginRight:"10px",color:"green"}}>In Stock</label>
                    <button>Add to Cart</button></> : <><label style={{marginRight:"10px",color:"red"}}>Out Of Stock</label><button style={{color:"red"}}>Notify Me</button></>}
                  </p>
                  </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
        


    
}

export default Products;