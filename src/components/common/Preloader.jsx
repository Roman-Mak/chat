import React from "react";
import preloader from "../../assets/img/todolists-preloader.svg"

const Preloader = () => {
    return (
        <>
            <img src={preloader} alt={"loading"} style={{marginTop: 100}}/>
        </>
    )
};

export default Preloader;