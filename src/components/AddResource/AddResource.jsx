import React, {Component} from 'react'



class AddResource extends Component{
    state = {
        
            resource: "",
            servicePlanningArea: "",
            operator: "",
            website: "",
            address: "",
            email: "",
            phone: "",
            hoursOfOperation: "",
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
          <div>
          <form onSubmit={this.handleSubmit}> 
            Resource:
            <input type='text' name="resource"
              onChange={this.handleChange} autoComplete="off"/><br/>
            Service Planning Area:
            <input type='text' name="servicePlanningArea"
              onChange={this.handleChange} autoComplete="off"/><br/>  
            Operator:
            <input type='text' name="operator"
              onChange={this.handleChange} autoComplete="off"/><br/>  
            Website:
            <input type='text' name="website"
              onChange={this.handleChange} autoComplete="off"/><br/>  
            Address:
            <input type='text' name="address"
              onChange={this.handleChange} autoComplete="off"/><br/>  
            Email:
            <input type='text' name="email"
              onChange={this.handleChange} autoComplete="off"/><br/>  
            Phone (XXX)-XXX-XXXX:
            <input type='text' name="phone" placeholder="(XXX)-XXX-XXXX"
              onChange={this.handleChange} autoComplete="off"/><br/>  
            Hours Of Operation:
            <input type='text' name="hoursOfOperation"
              onChange={this.handleChange} autoComplete="off"/><br/>  
            Walk Ins Allowed:
            <input type='checkbox' name="walkInsAllowed"
              onChange={this.handleChange} autoComplete="off"/><br/>  
            Eligibility Requirements:
            <input type='text' name="eligibilityRequirements"
              onChange={this.handleChange} autoComplete="off"/><br/>  
            Population Notes:
            <input type='text' name="populationNotes"
              onChange={this.handleChange} autoComplete="off"/><br/>  
            Notes:
            <input type='text' name="notes"
              onChange={this.handleChange} autoComplete="off"/><br/>  
              
              <button type="submit" className="button-submit"> Submit </button> <br/>
              
          </form></div>
      )

  }



}

export default AddResource