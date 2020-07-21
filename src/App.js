import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import randomImage from "./randomImage.jpg"

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
     </div>
    </nav>  

    <div className="body">
      <div style={{border:'solid 1px black' , maxWidth:'100vw'}} >  
      <h1 className="titleRed">Fawzi Saidi</h1> 
          <br />  
      </div>
    </div>
    <div className="flex">
          <img className ="images" src={randomImage} width="560" height="315"/> 
          <br /> 
          <img className ="images" src="/images/randomImage2.jpg" width="560" height="315" /> 
          <br />
          <iframe width="560" height="315" src="https://www.youtube.com/embed/8dGl1cJSJVI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div> 
          <footer class="page-footer font-small blue">
          <div class="footer-copyright text-center py-3">© 2020 Fawzi GMC Copyright
          </div>
        </footer>
    </div>
  );
}

export default App;
