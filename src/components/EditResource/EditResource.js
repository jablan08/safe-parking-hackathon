import React, {Component} from 'react'
import Geocode from "react-geocode"
import styled from "styled-components";
import * as routes from "../../constants/routes"
import {withRouter, Link} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"

const NewForm = styled.form`

	display: flex;
	flex-direction: column;
	button {

		height: 2rem;
		background-color: rgb(152,201,228);
		border-color: rgb(94,172,215);
		border-width: 0.04rem;
		font-size: .7em;
		border-radius: .3rem;
		margin: 0 4rem;
		
	}
	h1 {
		text-align: center;
		margin-top: 8rem;
	}
	input {
		margin: 0.4rem 4rem;
		border: .01rem solid rgb(151 151 151);
		font-size: 1rem;
		padding: 1rem;
	}
	.label-tag {
		margin: 0 4rem;
	}
	.link-home {
		text-align: center;
	}
	.message {
		text-align: center;
	}
	.delete-btn {
		border: none;
		background: none;
		font-size: 1rem;
		:hover {
			color: red
		}
	}
`
class EditResource extends Component{
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
		lat: null,
		lng: null,
		loaded:false,
		id: null,
		error: ""
	}

	editResource = async () => {
		try {
			const newResource = await fetch(`/resources/${this.state.id}`, {
				method: "PUT",
				credentials: "include",
				body: JSON.stringify(this.state),
				headers: {
								"Content-Type": "application/json"
				}
			})
			const parsedResponse = await newResource.json();
		
			if (parsedResponse.success) {
				this.setState({
					resource: parsedResponse.resource.resource,
					servicePlanningArea: parsedResponse.resource.servicePlanningArea,
					operator: parsedResponse.resource.operator,
					website: parsedResponse.resource.website,
					address: parsedResponse.resource.address,
					email: parsedResponse.resource.email,
					phone: parsedResponse.resource.phone,
					hoursOfOperation: parsedResponse.resource.hoursOfOperation,
					walkInsAllowed: parsedResponse.resource.walkInsAllowed,
					eligibilityRequirements: parsedResponse.resource.eligibilityRequirements,
					populationNotes: parsedResponse.resource.populationNotes,
					notes: parsedResponse.resource.notes,
					lat: parsedResponse.resource.lat,
					lng: parsedResponse.resource.lng,
					loaded:true,
					id: parsedResponse.resource._id,
					message: "Resource has been updated!"
				})
			}
		} catch (error) {
			this.setState({
				error: "There was an error processing your request."
			})
		}
	}


	componentDidMount(){
		this.populateEverything().then(allData=>{
			this.setState({
				resource: allData.resource,
				servicePlanningArea: allData.servicePlanningArea,
				operator: allData.operator,
				website: allData.website,
				address: allData.address,
				email: allData.email,
				phone: allData.phone,
				hoursOfOperation: allData.hoursOfOperation,
				walkInsAllowed: allData.walkInsAllowed,
				eligibilityRequirements: allData.eligibilityRequirements,
				populationNotes: allData.populationNotes,
				notes: allData.notes,
				lat: allData.lat,
				lng: allData.lng,
				loaded:true,
				id: allData._id
			})
		})
	}


	handleChange = (e) =>
		this.setState({
				[e.target.name]: e.target.value
	})
	handleTimeChange = (e) => {    
			this.setState({
			hoursOfOperation:{
				...this.state.hoursOfOperation,
								[e.target.name]: e.target.value
			}
		})
	}

	setSearch = (address) => {
		Geocode.fromAddress(address).then(
			response => {
				const { lat, lng } = response.results[0].geometry.location;
				this.setState({
					lat:lat,
					lng:lng
				})
				this.editResource()
			},
			error => {
				console.error(error);
			});
		}

	handleSubmit = async (e) => {
		e.preventDefault();
		this.setSearch(this.state.address)
	}




	populateEverything = async() => {
		try {
			const response = await fetch(`/resources/${this.props.match.params.id}`, {
				credentials: "include",
				headers: {
					"Content-Type": "application/json"
				}
			})
			const res = await response.json()
	
			return res.resource
		} catch (error) {
			this.setState({
				error: "There was an error processing your request."
			})
		}
	}
	handleDeleteResource = async (id) => {
		const deleteResource = await fetch(`/resources/${id}`, {
			method: "DELETE",
			credentials: "include",
			headers: {
				"Content-Type": "application/json"
			}
		})
		const parsedResponse = await deleteResource.json();
		if (parsedResponse.success) {
			this.props.history.push(routes.ROOT)
		}
	}






	render(){
		const { resource, operator, address, phone, hoursOfOperation, message, id} = this.state
		return(
				this.state.loaded
				?
					
				<NewForm onSubmit={(e)=>this.handleSubmit(e)}>
					<h1>Edit Resource</h1>
					<img src="" alt=""/>
					<button className="delete-btn" onClick={()=> this.handleDeleteResource(id)}>Delete Resource <FontAwesomeIcon icon={faTrashAlt}/></button>
					{/* <label className="label-tag" htmlFor="servicePlanningArea">Service Planning Area:</label>
					<input type='text' name="servicePlanningArea"
				onChange={this.handleChange} autoComplete="off"/><br/>   */}
					<label className="label-tag" htmlFor="operator">Name:</label>
					<input type='text' name="operator" value={operator}
						onChange={this.handleChange} autoComplete="off" placeholder="Enter Name"/><br/>  
					{/* <label className="label-tag" htmlFor="website">Website:</label> 
					<input type='text' name="website"
				onChange={this.handleChange} autoComplete="off"/><br/>   */}
						<label className="label-tag" htmlFor="address">Location:</label>
					<input type='text' name="address" value={address}
						onChange={this.handleChange} autoComplete="off" placeholder="Enter Location" /><br/>  
				<label className="label-tag" htmlFor="resource">Category:</label>
				<input type='text' name="resource" value={resource}
					onChange={this.handleChange} autoComplete="off" placeholder="Category"/><br/>
						{/* <label className="label-tag" htmlFor="email">Email:</label>
					<input type='text' name="email"
						onChange={this.handleChange} autoComplete="off"/><br/>   */}
					<label className="label-tag" htmlFor="phone">Phone (XXX)-XXX-XXXX:</label>
					<input type='text' name="phone" placeholder="(XXX)-XXX-XXXX" value={phone}
						onChange={this.handleChange} autoComplete="off" /><br/>  
					<label className="label-tag" htmlFor="hoursOfOperation">Hours Of Operation:</label>
					<label className="label-tag" htmlFor="monday">Monday </label>
					<input type='text' name="m" day="m" value={hoursOfOperation.m }
						onChange={this.handleTimeChange} autoComplete="off" placeholder="Ex: 8:00AM - 10:00AM" /> 
					<label className="label-tag" htmlFor="tuesday">Tuesday</label>  
					<input type='text' name="t" value={hoursOfOperation.t }
						onChange={this.handleTimeChange} autoComplete="off" placeholder="Ex: 8:00AM - 10:00AM"/> 
					<label className="label-tag" htmlFor="wednesday">Wednesday</label>   
					<input type='text' name="w" value={hoursOfOperation.w}
						onChange={this.handleTimeChange} autoComplete="off" placeholder="Ex: 8:00AM - 10:00AM"/> 
					<label className="label-tag" htmlFor="thursday">Thursday</label>  
					<input type='text' name="th" value={hoursOfOperation.th}
						onChange={this.handleTimeChange} autoComplete="off" placeholder="Ex: 8:00AM - 10:00AM"/>
					<label className="label-tag" htmlFor="friday">Friday</label>  
					<input type='text' name="f" value={hoursOfOperation.f}
						onChange={this.handleTimeChange} autoComplete="off" placeholder="Ex: 8:00AM - 10:00AM"/>
					<label className="label-tag" htmlFor="saturday">Saturday</label> 
					<input type='text' name="sat" value={hoursOfOperation.s}
						onChange={this.handleTimeChange} autoComplete="off" placeholder="Ex: 8:00AM - 10:00AM"/>
					<label className="label-tag" htmlFor="sunday">Sunday</label>  
					<input type='text' name="sun" value={hoursOfOperation.sun}
						onChange={this.handleTimeChange} autoComplete="off" placeholder="Ex: 8:00AM - 10:00AM"/>
					{/* <label className="label-tag" htmlFor="walkInsAllowed">Walk Ins Allowed:</label>
					<input type='checkbox' name="walkInsAllowed"
						onChange={this.handleChange} autoComplete="off"/><br/>  
					<label className="label-tag" htmlFor="operator">Eligibility Requirements:</label>
					<input type='text' name="eligibilityRequirements"
						onChange={this.handleChange} autoComplete="off"/><br/>  
					<label className="label-tag" htmlFor="operator">Population Notes:</label>
					<input type='text' name="populationNotes"
						onChange={this.handleChange} autoComplete="off"/><br/>   */}
					{/* <label className="label-tag" htmlFor="operator">Notes:</label>
					<input type='text' name="notes"
						onChange={this.handleChange} autoComplete="off" placeholder=""/><br/>   */}
						
					<button type="submit" className="button-submit"> Submit Edit </button> <br/>
					{
						message !== ""
						&&
						<h2 className="message"> {message} </h2> 
					}
						
					<Link className="link-home"to={routes.ROOT}> Back to Map </Link>
				</NewForm>
				:
				<div>Loading</div>
		)

}
}

export default withRouter(EditResource)