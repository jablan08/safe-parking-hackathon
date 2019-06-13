import React, {Component} from 'react'
import styled from "styled-components"
import ResItem from './ResItem'


const InsideFooter = styled.div`
    /* display: flex;
    flex-direction: column;
    > ul {
        list-style: none;
    } */
`

class ResourceList extends Component{
    state={
        
    }
    
    render(){
        return(
        <InsideFooter>
         
            <ul>
               {
               this.props.resources.map((res)=>{
        
                    return <ResItem key={res.id} res={res}/>
                })
               }
            
            </ul>
        </InsideFooter>

)
}
}

export default ResourceList
