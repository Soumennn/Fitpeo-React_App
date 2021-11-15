import React from 'react'
import { Link  } from 'react-router-dom';

function Navbar() {
    return (
        <>

        <nav className="navbar navbar-expand-lg navbar-dark " style={{backgroundColor: '#84a59d'}}>
        <div className="container-fluid">
            <Link className="navbar-brand " to="/" >Re:T0ur</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Store List</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" to="/">Tour Locator</Link>
                </li>
                <li className="nav-item dropdown">
                <Link className="nav-link active dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    System Pages
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" to="/">Action</Link></li>
                    <li><Link className="dropdown-item" to="/">Another action</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                </ul>
                </li>
                <li className="nav-item dropdown">
                <Link className="nav-link active dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Layout Variants
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" to="/">Action</Link></li>
                    <li><Link className="dropdown-item" to="/">Another action</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                </ul>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" to="/">Tutorials</Link>
                </li>
                
            </ul>
            
                <button className="btn btn-outline-light" type="submit">+ Submit Link tour</button>
            
            </div>
        </div>
        </nav>

        </>
    )
}

export default Navbar
