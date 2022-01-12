import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";  
import Tech from './Technologyblog';  
import Blog from './techblog.js';  
import './App.css'; 
import React from 'react';
import Nav from './nav.js';
import Footer from './footer.js';

 
class App extends React.Component{
  //  constructor(){
  //   super();   
  //   this.state={
  //     da:[],  
  //     DataisLoaded:false
  //   }   
  //  }                  
  // componentDidMount(){      
  //   fetch('http://localhost:3003/datastore',{     
  //     method: 'POST',                                   
  //     headers: { 
  //         'Content-Type': 'application/json'  
  //     },                      
  //    }).then(data=>{       
  //     return  data.json();            
  //      }).then(ans=>{
         
  //      this.setState({
  //         da:ans,     
  //         DataisLoaded:true
  //      })
  
  //     });  
  //   }
      
    render(){
    //   const { DataisLoaded, items } = this.state;   
		// if (!DataisLoaded) return <div>
		// 	<h1> Pleses wait some time.... </h1> </div> ;
  
      return (
    <>
     
      <Router>
        <Routes>    
            <Route exact path='/' element={<Blog/>}>
      
            </Route>
        </Routes>
      </Router>
      <Footer/>
    </>
  );  
  }
}

export default App;
