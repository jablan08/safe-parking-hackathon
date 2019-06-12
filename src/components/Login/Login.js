import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import styled from "styled-components";

const LoginContainer = styled.div`

`

const MainBox = styled.div`

`

class Login extends Component {
	state = { 
			email: "",
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
									email: "",
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
			const { email, password, message } = this.state
			return ( 
					<>
							<LoginContainer>
									<MainBox>
											<div className="sub-log-box">
													<div>
															<h1 className="sign-box">
																	Sign in
															</h1>
													</div>
													<div className="login-box">
															<form onSubmit={e => this.handleSubmit(e)}>
																			<label className="label-tag" htmlFor="email">Email</label>
																			<input className="input-box" type="text" name="email" onChange={this.handleChange} value={email}/>
																			<label className="label-tag" htmlFor="password">Password</label>
																			<input className="input-box" type="password" name="password" onChange={this.handleChange} value={password} autoComplete="off"/>
																			<button type="submit" className="button-submit"> Submit </button> <br/>
																			<h6>{message} </h6> <br/>
																	</form>
													</div>
											</div>
									</MainBox>
							</LoginContainer>
					</>
				);
	}
}

export default Login;