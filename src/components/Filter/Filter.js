import React, {Component} from 'react';
import styled from 'styled-components'


const SideBar = styled.div`
  display: flex;
  justify-content: flex-end;

  .hide-bar {
    height: 100%;
    width: 0;
    
    position: fixed;
    top: 0;
    right: 0;
    background-color: rgb(250, 250, 250);
    overflow: hidden;
    transition: 0.8s;
    
    padding-top:10.5rem;
  }
  .show-bar {
    height: 100%;
    width: 50vw;
    position: fixed;
    top: 0;
    right: 0;
    background-color: rgb(250,250,250);
    overflow: hidden;
    -webkit-transition: 0.8s;
    transition: 0.8s;
    font-size: .9rem;
    padding: 1.5rem;
    padding-top:10.5rem;
    text-align: center;
  }
  .filters {
    display: flex;
    flex-direction: column;
    text-align: left;
  }
  h1 {
    
    text-align: center;
  }
  h1, p {
    color: rgb(24, 104, 153);
    margin: .4rem;
  }
  p {
    text-align: left;
    font-size: 20px;
    font-weight: 600;
  }
  label {
    margin-left: 10px;
    font-weight: 500;
  }
  .closebtn {
    font-size: 2rem;
    background-color: transparent;
    border: none;
  }
  .inputs {
    margin: .05rem;
  }
  .button-submit {
	width: 100%;
    height: 2rem;
    background-color: rgb(152,201,228);
    border-color: rgb(94,172,215);
    border-width: 0.04rem;
    font-size: .7em;
    border-radius: .3rem;
		
	}
`


class Filter extends Component {
  state = {
    data: [],
    tags: []
  }
  onChange = e => {
    // adds the filter the user selects into the array of filters
    if (!this.state.tags.includes(e.target.value)) {
      this.setState(
        {
          tags: [...this.state.tags, e.target.value]
        },
        () => {
          this.filterData()
        }
      );
      // if its not not in the array, that means its already in the array, so
      // when the user selects it again, it pops it out of the array
    } else {
      this.setState(
        {
          tags: this.state.tags.filter(t => t !== e.target.value)
        },
        () => {
          this.filterData()
        }
      );
    }
  };

  filterData = ()=>{
    this.props.setFilter(this.props.resource.filter(d => this.state.tags.includes(d.resource)))
    this.setState({
      data: this.props.resource.filter(d => this.state.tags.includes(d.resource))
    })
  }


  render(){
    const showOrHide = this.props.show ? 'show-bar' : 'hide-bar'
    console.log(this.state)
    return (
        <SideBar>
          <div className={showOrHide}>
           
            <h2>Filters</h2>
            <p>Resources</p>
            <div className='filters'>
              <div className='inputs'><input type="checkbox" value="Free groceries" onChange={this.onChange}/><label>Food & Groceries</label></div>
              <div className='inputs'><input type="checkbox" value="Meals" onChange={this.onChange}/><label>Meals</label></div>
              <div className='inputs'><input type="checkbox" value="Transportation" onChange={this.onChange}/><label>Transportation</label></div>
              <div className='inputs'><input type="checkbox" value="Showers" onChange={this.onChange}/><label>Showers</label></div>
              <div className='inputs'><input type="checkbox" value="Laundry" onChange={this.onChange}/><label>Laundry</label></div>
              <div className='inputs'><input type="checkbox" value="Storage" onChange={this.onChange}/><label>Storage</label></div>
              <div className='inputs'><input type="checkbox" value="School Supplies" onChange={this.onChange}/><label>School Supplies</label></div>
              <div className='inputs'><input type="checkbox" value="Access Centers" onChange={this.onChange}/><label>Access Centers</label></div>
              <div className='inputs'><input type="checkbox" value="Substance Abuse" onChange={this.onChange}/><label>Substance Abuse Centers</label></div>
              <div className='inputs'><input type="checkbox" value="Mental Health" onChange={this.onChange}/><label>Mental Health Centers</label></div>
              <div className='inputs'><input type="checkbox" value="Service Planning Area" onChange={this.onChange}/><label>Service Planning Areas</label></div>
              <div className='inputs'><input type="checkbox" value="SPLA Parking" onChange={this.onChange}/><label>SPLA Parking Lots</label></div>
            </div>
          </div>
        </SideBar>
    )
  }
}

export default Filter;