import React, {Component} from 'react'



// PASS IT A METHOD THAT TAKES VALUE AND DOES SOMETHING WITH IT IN PARENT COMPONENT
class Search extends Component{
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

    onSubmit=()=>{
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/campaigns/${this.props.match.params.id}`)
    }

   render(){
       return(
           <form onSubmit={this.onSubmit}>
               Resource:
               <input type="text" name="resource"/><br/>
               Service Planning Area:
               <input type="text" name="servicePlanningArea"/><br/>
               Operator:
               <input type="text" name="operator"/><br/>
               Website:
               <input type="text" name="website"/><br/>
               Full Address:
               <input type="text" name="address"/><br/>
               Email:
               <input type="text" name="email"/><br/>
               Phone Number (input as (xxx)-xxx-xxxx):
               <input type="text" name="phone" placeholder="(xxx)-xxx-xxxx"/><br/>
               Hours of Operation:
               <input type="text" name="hoursOfOperation"/><br/>
               Walk-ins Allowed:
               <input type="checkbox" name="website"/><br/>
               Eligibility Requirements:
               <input type="text" name="eligibilityRequirements"/><br/>
               Population Notes:
               <input type="text" name="populationNotes"/><br/>
               Notes:
               <input type="text" name="notes"/><br/>
           </form>
       )
   }


}

export default Search