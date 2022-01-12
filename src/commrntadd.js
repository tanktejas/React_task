import react, { useState } from 'react'
import './commentadd.scss'
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import TextField from '@material-ui/core/TextField';
  
function Addcomment(){
    const [comment,setComm]=useState({
        name:"",
        comment:"sd"
    })  
    const [style,setstyle]=useState({});
    function  funforchangename(e) {
        setComm({
             name:e.target.value,
             comment:comment.comment
        })
    
    }
    function changecomment(e){
      setComm({
        name:comment.name,
        comment:e.target.value
   })
  }
  function under(){
    return (
      <b>{comment.comment}</b> 
    )
  }
  // comment font style 
  function underlinetext(){
      setstyle({
        textDecoration: "underline"
      })
  }
  function bold(){
    setstyle({
      "fontWeight": "bold"  
    })
  }
  function italic(){
    setstyle({  
      "fontStyle": "italic"
    })
  }
  function copy(){
    navigator.clipboard.writeText(comment.comment);
  }
  function reqtoadd(){
    fetch('https://tejas123.herokuapp.com/adddata',{     
      method: 'POST',    
      body:JSON.stringify(comment),                                
      headers: { 
          'Content-Type': 'application/json'  
      },                      
     })             
  }     
     return(
        <>
            <div className='includecomment'>
                <h1>add comment</h1>
                {/* //input for name of user  */}
                <input type="text" value={comment.name} onChange={(e)=>funforchangename(e)} placeholder='Enter your name'>
  
                </input>
                  

{/* // div for comment  */}
                <div class="container">
  <div class="form form-stacked">
    <div class="form-block">
      <label class="label" for="board_content">COMMENT</label>
      <div class="form-controls">
        <span class="button ion-code" title="Code block <pre><code>" data-button-type="addCode" onClick={()=>underlinetext()}><strong><u>U</u></strong></span>
        <span class="button ion-code-working" title="Inline code <code>" data-button-type="addInlineCode" onClick={()=>copy()}><strong>C</strong></span>
        <span class="button" title="Strong <strong>" data-button-type="addStrong" onClick={()=>bold()}><strong>b</strong></span>
        <span class="button" title="Emphasis <em>" data-button-type="addEmphasis" onClick={()=>italic()}><strong><em>i</em></strong></span>

      </div>
      <textarea style={style}  placeholder="Ask a programming question or share a tip with other developers. Markdown is supported." value={comment.comment} onChange={(e)=>changecomment(e)} class="textarea-tall" id="board_content"></textarea>
    </div>   
  </div>
</div>

 <button className='add' onClick={()=>reqtoadd()}>Add </button>
            </div>    
        </>     
     )
}

export default Addcomment;
