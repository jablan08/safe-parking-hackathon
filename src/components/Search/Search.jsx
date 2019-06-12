import React, {Component} from 'react'



// PASS IT A METHOD THAT TAKES VALUE AND DOES SOMETHING WITH IT IN PARENT COMPONENT
class Search extends Component{
    state = {
        search:''
      
    }

    handleChange = async(e) => {
        e.preventDefault()
        await this.setState({[e.currentTarget.name]: e.currentTarget.value});
      
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        this.props.searching(this.state.search)
        
    }

  render(){
      const { search } = this.state
      return(
          <div>
          <form onChange={this.handleSubmit}> 
              <input type='text' name="search" placeholder="search" 
              value={this.state.username} onChange={this.handleChange} autoComplete="off"/>
              
          </form></div>
      )

  }



}

export default Search