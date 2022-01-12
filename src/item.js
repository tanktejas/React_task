import react from 'react'
import './commentcss.css'
import Avatar from '@material-ui/core/Avatar';
function Item(props){
      
    return (    
      <>  
         <div className='maincomment'>
             <div className='iconname'>
             <Avatar className='avatar' src="/broken-image.jpg" />
               <h2> {props.name}</h2>       
             </div> 
               
              <p>{props.comment}</p>   

         </div>
      </>   
    )
}
 
export default Item;
