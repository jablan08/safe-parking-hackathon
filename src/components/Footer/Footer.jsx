import React, { Component } from 'react'
import ResourceList from '../ResourceList/ResourceList'
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
            <div><ResourceList resources={this.props.resource}/></div>
            }

            </div>
		)
	}
}

export default Footer;