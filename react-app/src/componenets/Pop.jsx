import Button from "./Button";

const Pop=(props)=>{



    return(
    <div className="pop">
      <div className="overlay">
        <div className="text">
        <p>Are You Sure?</p>
        <Button className="close" label="X" onClick={props.ocClose}/>
        </div>
        
        <div>
        <div className="button">
        <Button className="confirm" label="Confirm" onClick={props.onClick}/>
        <Button className="cancel" label="Cancel" onClick={props.onClose}/></div>
        </div>
      </div>
     </div>   
        
  
    )
}
export default Pop;