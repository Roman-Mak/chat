import React from "react";
import style from "./Quality.module.css"

const Quality = (props) => {
        return (
            <div className={props.styles}>{props.quality}</div>
        );
    };

export default Quality;