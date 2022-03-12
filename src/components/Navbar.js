import React from 'react'
import '..//styles//Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav className='navbar'>

                <div className='navbar-container'>

                    <Link
                        to='/'
                        className='nav-logo'>
                        DRGN
                    </Link>

                </div>

                <ul className='navbar-list'>

                    <li className='nav-item'>
                        <Link
                            to='/'
                            className='nav-links'>
                            Home
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link
                            to='/chapter'
                            className='nav-links'>
                            Kapitel
                        </Link>
                    </li>

                    <li>
                        <Link
                            to='/Login'
                            className='nav-links'>
                            Login
                        </Link>
                    </li>

                </ul>

            </nav>

        </div>
    )
}

export default Navbar