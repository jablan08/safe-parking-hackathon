import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as routes from '../../constants/routes'

export default class Navbar extends Component {
    render() {
        return (
            <div className='navbar'>
                <Link to={routes.ROOT}>Home</Link>
                <Link to={routes.POST}>Post</Link>
                <Link to={routes.LOGIN}>Login</Link>
                <Link to={routes.REGISTER}>Reg</Link>
            </div>
        )
    }
}