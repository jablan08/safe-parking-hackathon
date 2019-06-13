import React, { Component } from 'react'
import styled from "styled-components";

const RegisterContainer = styled.div`
	>form {
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	}
	.label-tag-1 {
		margin-top: 10rem;
	}
	button {
		width: 100%;
    height: 2rem;
    background-color: rgb(152,201,228);
    border-color: rgb(94,172,215);
    border-width: 0.04rem;
    font-size: .7em;
		border-radius: .3rem;
		margin-top: 1rem;
		
	}
	input{
		border: .01rem solid gray;
    padding: 1rem 2rem 1rem;
    line-height: .01rem;
		font-size: 1.2em;
	}
`

class Register extends Component {
	state = {
			name: "",
			splaId: "",
			password: "",
			logged: false,

		};

		handleChange = e => {
			this.setState({
				[e.target.name]: e.target.value
			});
		};

		handleSubmit = async (e) => {
			e.preventDefault();
			try {
					const createAdmin = await fetch("/admin/new", {
							method: "POST",
							credentials: "include",
							body: JSON.stringify(this.state),
							headers: {
									"Content-Type": "application/json"
							}
					})
					const parsedResponse = await createAdmin.json();
					console.log(parsedResponse)
							if (parsedResponse.success) {
									localStorage.setItem("user", JSON.stringify(parsedResponse.newAdmin));
									this.props.setCurrentUser(parsedResponse.newAdmin)
									this.setState({
											logged: true
									})
							}
			} catch (error) {
					console.log(error)
			}
	}

	render() {
		const { name, password, splaId} = this.state
			return (
					<RegisterContainer>
							
							<form onSubmit={e => this.handleSubmit(e)}>
								<label className="label-tag-1" htmlFor="name">Name</label>
								<input className="input-box" type="text" name="name" onChange={this.handleChange} value={name}/>
								<label className="label-tag" htmlFor="password">Password</label>
								<input className="input-box" type="password" name="password" onChange={this.handleChange}value={password} autoComplete="off"/>
								<label className="label-tag" htmlFor="splaId">SPLA ID</label>
								<input className="input-box" type="splaId" name="splaId" onChange={this.handleChange} value={splaId}/>
								<button type="submit"> Submit</button>
							</form>
					</RegisterContainer>
		)
	}
}

export default Register;