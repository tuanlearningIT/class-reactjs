import React from "react";
import './Nav.scss';
import {
    Link, NavLink
} from "react-router-dom";
class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink to="/" activeClassName="active" exact={true}>
                    Home
                </NavLink>
                <NavLink to="/Todos" activeClassName="active">
                    Todos
                </NavLink>
                <NavLink to="/About" activeClassName="active">
                    About
                </NavLink>
                <NavLink to="/User" activeClassName="active">
                    User
                </NavLink>
                {/* <Link to="/" className="active">Home</Link> */}
                {/* <a className="active" href="/">Home</a>
                <a href="/Todos">Todos</a>
                <a href="/About">About</a> */}
            </div>
        )
    }
}

export default Nav;