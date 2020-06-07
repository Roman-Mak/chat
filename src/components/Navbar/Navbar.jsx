import React from 'react';
import style from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav className={style.navbar}>
            <div className={style.nav}>
                <NavLink to={"/monday"} activeClassName={style.active}>Monday</NavLink>
            </div>
            <div className={style.nav}>
                <NavLink to={"/tuesday"} activeClassName={style.active}>Tuesday</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
