import React, { Component } from 'react'
import ResourceList from '../ResourceList/ResourceList'
import ExpandedResource from '../ExpandedResource/ExpandedResource'
import styled from 'styled-components'

const FootContainer = styled.div`
	/* display: flex;
    
    position: absolute;
    bottom: 0;
    flex-direction: column; */

`


class Footer extends Component {
	state = {
        

		};

		handleChange = e => {
			
		};

		handleSubmit = async (e) => {
			
    }
    


	render() {
		
		return (
			<FootContainer>
				<div>
					
					{
						this.props.clicked
						 ?
						<ExpandedResource selected={this.props.selected}/>
						:
						<ResourceList resources={this.props.resource}/>
					}
				</div>

            </FootContainer>
		)
	}
}

export default Footer;