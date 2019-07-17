import React from 'react';
import logo from './logo.svg';
import './App.css';
import logoo from './logof.jpg';
import sa from './sa.jpg';

 




function App() {
   return (
     <div className="App">
      
 <nav className="navbar navbar-expand-lg navbar-light bg-light">
   {/* <a className="navbar-brand" href="#">
     <img src={logoo} width="100" height="100" className="d-inline-block align-top" alt="ferasah"/>
  
   </a> */}
   <a className="navbar-brand" href="#"><img src={logoo} width="100" height="100" className="d-inline-block align-top" alt="ferasah"/></a>
   <div className="collapse navbar-collapse" id="navbarNavDropdown">
     <ul className="navbar-nav">
       <li className="nav-item active">
         <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="#">Hajj Services</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="#">Crowd Mangement</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="#">About Us</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="#">Contact Us</a>
       </li>
      
     </ul>
   </div>
 
 </nav>
       <div className="jumbotron">
          
         <h1>Farasah</h1> 
         <p>We specialize in Hajj crowd mangement</p> 
          
<ul className="slideshow">
	<li><span></span></li>
  <li><span>2</span></li>
	<li><span></span></li>
	<li><span></span></li>
	<li><span></span></li>
</ul>
         {/* <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
   <div className="carousel-inner">
     <div className="carousel-item active">
       <img className="d-block w-100" img src={logoo} width="100" height="100" alt="First slide"/>
     </div>
     <div className="carousel-item">
       <img className="d-block w-100" img src={sa} alt="Second slide"/>
     </div>
     <div className="carousel-item">
       <img className="d-block w-100"  alt="Third slide"/>
     </div>
   </div>
   <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
     <span className="sr-only">Previous</span>
   </a>
   <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
     <span className="carousel-control-next-icon" aria-hidden="true"></span>
     <span className="sr-only">Next</span>
   </a>
 </div> */}
         {/* <form className="form-inline">
           <div className="input-group">
             <input type="email" className="form-control" size="50" placeholder="Email Address" required />
             <div className="input-group-btn">
               <button type="button" className="btn btn-danger">Subscribe</button>
             </div>
           </div>
         </form> */}
     {/* <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
   <div className="carousel-inner">
     <div className="carousel-item active">
       <img className="d-block w-100" src="..." alt="First slide"/>
     </div>
     <div className="carousel-item">
       <img className="d-block w-100" src="..." alt="Second slide"/>
     </div>
     <div className="carousel-item">
       <img className="d-block w-100" src="..." alt="Third slide"/>
     </div>
   </div>
   <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
     <span className="sr-only">Previous</span>
   </a>
   <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
     <span className="carousel-control-next-icon" aria-hidden="true"></span>
     <span className="sr-only">Next</span>
   </a>
 </div> */}
       
     </div>

     </div>
    
   );
 }

 export default App;
