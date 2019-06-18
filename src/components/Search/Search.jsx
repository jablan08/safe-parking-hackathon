import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons';
import styled from "styled-components";

const SearchBar = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 7.5rem;
    
    > form {
        display: flex;
        flex-direction: row;
        z-index: 1;
        font-size: 1rem;
        
    }
    .input-box {
        display: flex;
        flex-direction: column;
        padding: .5rem 1.2rem;
        background: #fff;
        border: 1px solid #ddd;
        cursor: text;
        box-sizing: border-box;
        border-radius: .5rem;
        z-index: 1;
    }
    .form-btn {
        z-index: 1;
        border: none;
        background: none;
    }
`
// PASS IT A METHOD THAT TAKES VALUE AND DOES SOMETHING WITH IT IN PARENT COMPONENT
class Search extends Component{
    state = {
        search:''
      
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({[e.currentTarget.name]: e.currentTarget.value});
      
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        this.props.searching(this.state.search)

        
    }

  render(){
      const { search } = this.state
      return(
          <SearchBar onSubmit={(e)=>this.handleSubmit(e)}>
                <input className="input-box" type='text' size="34" name="search" placeholder="Please enter your location" 
                value={search} onChange={(e)=>this.handleChange(e)} autoComplete="off"/>
                <button className="form-btn"type="submit"> Search <br/> <FontAwesomeIcon icon={faSearchLocation}/></button>
          </SearchBar>
      )

  }



}

export default Search