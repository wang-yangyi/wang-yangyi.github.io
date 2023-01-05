import React, { Component } from 'react';
import "../App.css"
import { Link } from 'react-scroll';

export default class Navbar extends Component {
    render() {
        return(
            <header className='header'>
                <nav className='nav container'>
                    <Link activeClass='active' smooth={true} spy={true} to='about' className='nav-logo'>
                        wangyangyi
                    </Link>
                    
                    <div className='nav-menu'>
                        <ul className='nav-list grid'>
                            <li className='nav-item'>
                                <Link activeClass='active' smooth={true} spy={true} to='about' className='nav-link'>
                                    About
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link activeClass='active' smooth={true} spy={true} to='experience' className='nav-link'>
                                    Experience
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link activeClass='active' smooth={true} spy={true} to='projects' className='nav-link'>
                                    Projects
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link activeClass='active' smooth={true} spy={true} to='resume' className='nav-link'>
                                    Resume
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>    
            </header>
            
        );
    }
}