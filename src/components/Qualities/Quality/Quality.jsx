import React from "react";
import style from "./Quality.module.css"

const Quality = (props) => {
        return (
            <div className={style[props.styles]}>{props.quality}</div>
        );
    };

export default Quality;