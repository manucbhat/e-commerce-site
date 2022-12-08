import React from "react";
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Products from "./Components/Products";
import CheckOutPage from "./Components/CheckOutPage";
function App() {
  return (
    <div>  
  <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
     
        <header className="product">E-Commerce-Site</header>
        <Link to={'/'} className="nav-link"><span id="products" className="product">Products</span></Link>
        <Link to={'/Checkout'} className="nav-link"><img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" style={{width:"20px",height:"30px",marginLeft:"30px",marginRight:"50px"}} /></Link>
      </nav>
      
      <Routes>
        <Route exact path='/' element={<Products />} />
        <Route exact path='/Checkout' element={<CheckOutPage />} />
      </Routes>
  </Router>
    </div>
  );
}

export default App;
