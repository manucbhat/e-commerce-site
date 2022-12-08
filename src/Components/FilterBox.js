import React from "react";

function FilterBox(){
    return(
        <div>
        <div className="filter"> <input type="radio" /><label>Vegetables</label></div>   
          <div className="filter"><input type="radio" className="filter" /><label>Fruits</label></div>  
        </div>
    )
}

export default FilterBox;
