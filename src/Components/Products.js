
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
               <img src={product.imageURL} alt="image" style={{width:"200px",height:"200px"}} /> 
               <br />
                  <h3 style={{float:"left",position:"relative",maxWidth:"200px",overflow:"hidden",margin:"0px",textAlign:"start"}}>{ product.name}</h3>
                  <br />
                  <p style={{display:"flex",float:"left",position:"absolute", margin:"0px"}}>{ product.category }</p>
                  <p style={{display:"flex",position:"absolute", margin:"0px"}}>Rs.{ product.price }</p>
                  <p>
                    <button>Add to Cart</button>
                  </p>
                </div>
              );
            })}
          </div>
        );
        


    
}

export default Products;