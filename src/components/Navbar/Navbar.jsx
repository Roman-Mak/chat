import React from 'react';
import style from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={style.navbar}>
            <nav className={style.navbarPanel}>
                    <div className={style.nav}>
                        <NavLink to={"/monday"} activeClassName={style.active}>Monday</NavLink>
                    </div>
                    <div className={style.nav}>
                        <NavLink to={"/tuesday"} activeClassName={style.active}>Tuesday</NavLink>
                    </div>
            </nav>
            <div className={style.navigation}>Navigation</div>
        </div>
    );
};

export default Navbar;
