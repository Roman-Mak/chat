import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
        <div className="navbar">
           <NavLink to={"/monday"} className={"nav"}>Monday</NavLink>
           <NavLink to={"/tuesday"} className={"nav"}>Tuesday</NavLink>
        </div>
    );
};

export default Navbar;
