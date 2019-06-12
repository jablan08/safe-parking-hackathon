import React, { Component } from 'react'

class Register extends Component {
	state = {
			name: "",
			email: "",
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
		const { name, password, email} = this.state
			return (
					<div>
							<form onSubmit={e => this.handleSubmit(e)}>
								<label className="label-tag" htmlFor="name">Name</label>
								<input className="input-box" type="text" name="name" onChange={this.handleChange} value={name}/>
								<label className="label-tag" htmlFor="password">Password</label>
								<input className="input-box" type="password" name="password" onChange={this.handleChange}value={password} autoComplete="off"/>
								<label className="label-tag" htmlFor="email">Email</label>
								<input className="input-box" type="email" name="email" onChange={this.handleChange} value={email}/>
								<button type="submit"> Submit</button>
							</form>
				</div>
		)
	}
}

export default Register;