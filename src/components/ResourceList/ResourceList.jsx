import React, {Component} from 'react'
import ResItem from './ResItem'

class ResourceList extends Component{
    state={
        
    }
    
  

        
  


    

    render(){

        
        return(
        <div>
         
            <ul>
               {
               this.props.resources.map((res)=>{
        
                    return <ResItem key={res.id} res={res}/>
                })
               }
            
            </ul>
        </div>

)
}
}

export default ResourceList
