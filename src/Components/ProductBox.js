import React from "react";

function ProductBox(props){
 return(
    <div>
    <div>{props.id}</div>
        <div>{props.image}</div>
        <div>{props.name}</div>
        <div>{props.price}</div>
        <div>{props.category}</div>
    </div>
 )   
}

export default ProductBox;