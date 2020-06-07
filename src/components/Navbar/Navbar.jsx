import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
        <div className="navbar">
           <NavLink to={"/monday"}>Monday</NavLink>
           <NavLink to={"/tuesday"}>Tuesday</NavLink>
        </div>
    );
};

export default Navbar;
