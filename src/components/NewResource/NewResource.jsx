import React, {Component} from 'react'
import styled from "styled-components";


class NewResource extends Component{
    state = {
        
            resource: "",
            servicePlanningArea: "",
            operator: "",
            website: "",
            address: "",
            email: "",
            phone: "",
            hoursOfOperation: {
              m: "",
              t: "",
              w: "",
              th: "",
              f: "",
              sat: "",
              sun: ""
            },
            walkInsAllowed: false,
            eligibilityRequirements: "",
            populationNotes: "",
            notes: "",
    
      
    }
    handleChange = (e) =>
			this.setState({
					[e.target.name]: e.target.value
	})


    handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
                const newResource = await fetch("/resources/new", {
                        method: "POST",
                        credentials: "include",
                        body: JSON.stringify(this.state),
                        headers: {
                                "Content-Type": "application/json"
                        }
                })
                const parsedResponse = await newResource.json();
                console.log(parsedResponse)
        } catch (error) {
                console.log(error)
        }
}

  render(){
      
      return(
          
          <form onSubmit={this.handleSubmit}> 
            <label className="label-tag" htmlFor="resource">Resource:</label>
            <input type='text' name="resource"
              onChange={this.handleChange} autoComplete="off"/><br/>
            <label className="label-tag" htmlFor="servicePlanningArea">Service Planning Area:</label>
            <input type='text' name="servicePlanningArea"
              onChange={this.handleChange} autoComplete="off"/><br/>  
            <label className="label-tag" htmlFor="operator">Operator:</label>
            <input type='text' name="operator"
              onChange={this.handleChange} autoComplete="off"/><br/>  
            <label className="label-tag" htmlFor="website">Website:</label> 
            <input type='text' name="website"
              onChange={this.handleChange} autoComplete="off"/><br/>  
             <label className="label-tag" htmlFor="address">Address:</label>
            <input type='text' name="address"
              onChange={this.handleChange} autoComplete="off"/><br/>  
             <label className="label-tag" htmlFor="email">Email:</label>
            <input type='text' name="email"
              onChange={this.handleChange} autoComplete="off"/><br/>  
             <label className="label-tag" htmlFor="phone">Phone (XXX)-XXX-XXXX:</label>
            <input type='text' name="phone" placeholder="(XXX)-XXX-XXXX"
              onChange={this.handleChange} autoComplete="off"/><br/>  
            <label className="label-tag" htmlFor="hoursOfOperation">Hours Of Operation:</label><br/>
            <label className="label-tag" htmlFor="monday">Monday </label>
            <input type='text' name="hoursOfOperation.m"
              onChange={this.handleChange} autoComplete="off" /> <br/>
            <label className="label-tag" htmlFor="tuesday">Tuesday</label>  
            <input type='text' name="hoursOfOperation.t"
              onChange={this.handleChange} autoComplete="off" /> <br/> 
            <label className="label-tag" htmlFor="wednesday">Wednesday</label>   
            <input type='text' name="hoursOfOperation.w"
              onChange={this.handleChange} autoComplete="off" /> <br/>
            <label className="label-tag" htmlFor="thursday">Thursday</label>  
            <input type='text' name="hoursOfOperation.th"
              onChange={this.handleChange} autoComplete="off" /><br/>
            <label className="label-tag" htmlFor="friday">Friday</label>  
            <input type='text' name="hoursOfOperation.f"
              onChange={this.handleChange} autoComplete="off" /><br/> 
            <label className="label-tag" htmlFor="saturday">Saturday</label> 
            <input type='text' name="hoursOfOperation.sat"
              onChange={this.handleChange} autoComplete="off" /><br/>
            <label className="label-tag" htmlFor="sunday">Sunday</label>  
            <input type='text' name="hoursOfOperation.sun"
              onChange={this.handleChange} autoComplete="off"/><br/> 
            <label className="label-tag" htmlFor="walkInsAllowed">Walk Ins Allowed:</label>
            <input type='checkbox' name="walkInsAllowed"
              onChange={this.handleChange} autoComplete="off"/><br/>  
            <label className="label-tag" htmlFor="operator">Eligibility Requirements:</label>
            <input type='text' name="eligibilityRequirements"
              onChange={this.handleChange} autoComplete="off"/><br/>  
            <label className="label-tag" htmlFor="operator">Population Notes:</label>
            <input type='text' name="populationNotes"
              onChange={this.handleChange} autoComplete="off"/><br/>  
            <label className="label-tag" htmlFor="operator">Notes:</label>
            <input type='text' name="notes"
              onChange={this.handleChange} autoComplete="off"/><br/>  
              
              <button type="submit" className="button-submit"> Submit </button> <br/>
              
          </form>
      )

  }



}

export default NewResource