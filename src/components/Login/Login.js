
import React, { Component } from 'react';
import styled from "styled-components";


const LoginContainer = styled.div`


`

const MainBox = styled.div`
	.sub-log-box {
		margin:0 auto;
		width:40rem;
		height:40rem;
		text-align:center;
		
	}
	button {
		width:30%;
		height:15%;
		background-color:rgb(152, 201, 228);
		border-color:rgb(94, 172, 215);
		border-width:1px;
		font-size:1em;
		
	}
	input{
		width:30%;
		border: 1pt solid gray; 
		padding:0;
		line-height:1px;
		font-size:1em;
	}
	br{
line-height:1px
	}

	
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
																Log In
															</h1>
													</div>
													<div className="login-box">
															<form onSubmit={e => this.handleSubmit(e)}>
																			
																			<input className="input-box" type="text" name="email" placeholder="email" onChange={this.handleChange} value={email}/><br/>
																			
																			<input className="input-box" type="password" name="password" placeholder="password" onChange={this.handleChange} value={password} autoComplete="off"/><br/><p/>
																			<button type="submit" className="button-submit"> LOG IN </button> <br/>
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