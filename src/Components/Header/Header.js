import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <h1 style={{
                fontSize:'50px',
                fontFamily:'fantasy'
            }} >COURSE HUB</h1>
            
            <nav className="navbar navbar-expand-lg navbar-light  bg-info ">
                <a style={{fontFamily:'Helvetica', color:'white'}} class="navbar-brand brand" href="/course"> Online Courses</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a style={{fontFamily:'Helvetica',color:'white'}} class="nav-link" href="/review">Order Review<span class="sr-only">(current)</span></a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Course Search" />
                       
                    </form>
                </div>
            </nav>
        </div>


    );
};

export default Header;