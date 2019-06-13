import React, {Component} from 'react';
class ResItem extends Component{
   
state={
  
}

    
     render(){
         const res=this.props.selected
        return (
            
           <div>
               <b>{res.operator}</b> - {res.resource}<br/>
                {res.phone}<br/>
                
                {res.hoursOfOperation ?
                    res.hoursOfOperation.map((hour)=>{
                    return(<div>{hour}</div>)
                }):
                null}



           </div>
            
        
                )}
        
}
export default ResItem;

