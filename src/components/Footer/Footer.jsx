import React, { Component } from 'react'

class Footer extends Component {
	state = {
        

		};

		handleChange = e => {
			
		};

		handleSubmit = async (e) => {
			
	}

	render() {
		
			return (
			<div>
                {this.props.clicked ?
                <div>CLICKED THING</div>
            :
            <div>GENERAL LIST</div>
            }

            </div>
		)
	}
}

export default Footer;