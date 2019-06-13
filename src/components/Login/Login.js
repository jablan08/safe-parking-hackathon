
import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import * as routes from "../../constants/routes";
import styled from "styled-components";


const LoginContainer = styled.div`


`

const MainBox = styled.div`
	.sub-log-box {
		display: flex;
    flex-direction: column;
    height: 40rem;
    align-items: center;
		
	}
	button {
		width: 100%;
    height: 2rem;
    background-color: rgb(152,201,228);
    border-color: rgb(94,172,215);
    border-width: 0.04rem;
    font-size: .7em;
    border-radius: .3rem;
		
	}
	input{
		border: .01rem solid gray;
    padding: 1rem 2rem 1rem;
    line-height: .01rem;
    font-size: 1.2em;
	}
	br{
		line-height:1px
	}
	.sign-box {
		margin-top: 10rem;
	}

	
`


class Login extends Component {
	state = { 
			splaId: "",
			password: "",
			message: ""

	}
	handleChange = (e) =>
			this.setState({
					[e.target.name]: e.target.value
	})

	handleSubmit = async (e) => {
			e.preventDefault();
	
			try {
					const login = await fetch("/admin/login", {
							method: "POST",
							credentials: "include",
							body: JSON.stringify(this.state),
							headers: {
									"Content-Type": "application/json"
							}
					})
					const parsedResponse = await login.json();
					console.log(parsedResponse)
					if (parsedResponse.success) {
							localStorage.setItem("user", JSON.stringify(parsedResponse.user));
							this.setState({
									splaId: "",
									password: ""
							})
							this.props.setCurrentUser(parsedResponse.user)
					} else {
							this.setState({
									message: parsedResponse.message
							})
					}
			} catch (error) {
					console.log(error)
			}
	}
	render() { 
			const { splaId, password, message } = this.state
			return ( 
					<>
					{
						this.props.currentUser.splaId
						? <Redirect to={routes.ROOT}/>
						:
						<LoginContainer>
								<MainBox>
										<div className="sub-log-box">
												<div>
														<h1 className="sign-box">
															Log In
														</h1>
												</div>
												<div className="login-box">
														<form onSubmit={e => this.handleSubmit(e)}>
																		<input className="input-box" type="text" name="splaId" placeholder="Enter SPLA ID" onChange={this.handleChange} value={splaId}/><br/>
																		
																		<input className="input-box" type="password" name="password" placeholder="Password" onChange={this.handleChange} value={password} autoComplete="off"/><br/><p/>
																		<button type="submit" className="button-submit"> LOG IN </button> <br/>
																		<h6>{message} </h6> <br/>
														</form>
												</div>
										</div>
								</MainBox>
						</LoginContainer>
					}
					</>
				);
	}
}

export default Login;