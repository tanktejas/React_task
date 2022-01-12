import react, { useState } from 'react'
import { NavLink, Route, Router, Routes } from "react-router-dom";
import { Link } from 'react-router-dom'
import mui from '@material-ui/core';  
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
//css  
import './nav.scss';       
//image
import logo from './logo1.png';  
function Nav(){
    const [dissmall,setsmall]=useState({
        display:"none" 
    });
    const [sty,setst]=useState({
        display:"none"
    })

    //for getting window dimentions.
    function getWindowDimensions() {
      
        const { innerWidth: width, innerHeight: height } = window;     
        return {
          width,   
          height  
        };
      }  
      //hooks to store window dimention.
     const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());  
    const [onclicknavigate,setnav]=useState(true);
    const [stylefornav]=useState({
        "font-weight":"500",
   "font-size":"44px",  
    "color":"#EE9C14",
    "display":"none"
    })
    function funforseticon(){
        if(onclicknavigate){
          setnav(false);
        }else{
            setnav(true);    
        }
    }
    function funforsetsmall(){
        funforseticon();
        if(dissmall.display=="none")
        setsmall({
            display:"block" 
        });
        else
        setsmall({
            display:"none" 
        });
    }
    return(  
     <>
       
    <div className='main'>
      <div className='image'>
          <img src={logo}></img>
      </div>
     
       <div className='navigation'>  
           <ul className='navlink'>      
        {          
            windowDimensions>="916px" &&   
              <li className='menu'><a href='#'>  
              {  
                onclicknavigate ? <MenuIcon className='ic'  onClick={()=>funforsetsmall()}/> : <CloseIcon className='ic'  onClick={()=>funforsetsmall()}/>
              }
                </a></li>         
        }       
               <li><Link to='/'>Technology</Link></li>
               <li> <Link to=''>Coding</Link></li>  
               <li> <Link to='#'>Facts</Link></li>
               <li><Link to='#'>Open Source</Link></li>
               <li><Link to='#'>News</Link></li>
              
           </ul>     
       </div>  
    </div>           
       
    <div className='navlinkforsmalldevice' style={dissmall}>
    <ul>        
               <li><Link to='/'>Technology</Link></li>
               <li> <a href='#'>Coding</a></li>
               <li> <a href='#'>Facts</a></li>
               <li><a href='#'>Open Source</a></li>
               <li><a href='#'>News</a></li>
                  
           </ul>   
    </div> 
  
     </>
    )
}

export default Nav;