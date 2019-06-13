import React, { Component } from 'react'
import ResourceList from '../ResourceList/ResourceList'
import ExpandedResource from '../ExpandedResource/ExpandedResource'
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
                <div><ExpandedResource selected={this.props.selected}/></div>
            :
            <div><ResourceList resources={this.props.resource}/></div>
            }

            </div>
		)
	}
}

export default Footer;