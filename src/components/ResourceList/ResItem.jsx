import React, {Component} from 'react';
class ResItem extends Component{
   
state={
  
}

    
     render(){
         const res=this.props.res
        return (
            
            <li>
                <b>{res.operator}</b> - {res.resource}<br/>
                {res.phone}
            </li>
            
        
                )}
        
}
export default ResItem;

