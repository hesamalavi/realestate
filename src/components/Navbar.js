import React, { Component } from 'react';
import logo from '../images/logo.svg';
import { FiMenu } from 'react-icons/fi';
import { FiHome } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    state = {
        isOpen: false,
    };
    handleToggle = () => {
        this.setState({ isOpen: !this.setState.isOpen });
    };
    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <FiHome />
                        </Link>
                        <button
                            type="button"
                            className="nav-btn"
                            onClick={this.handleToggle}
                        >
                            <FiMenu className="nav-icon" />
                        </button>
                    </div>
                    <ul
                        className={
                            this.state.isOpen
                                ? 'nav-links show-nav'
                                : 'nav-links'
                        }
                    >
                        <li>
                            <Link to="/">Home</Link>
                            <Link to="/">Properties</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
