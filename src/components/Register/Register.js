import React, { Component } from 'react'

export default class Register extends Component {
    submit = () => {
        console.log("clicked")
    }
    render() {

        return (
            <div>
                <form>
                    <input type='tex' value="name"></input>
                    <input type='email' value='email'></input>
                    <input type='text' value='email'></input>
                    <button onClick={this.submit} type='submit'></button>
                </form>
            </div>
        )

    }
}