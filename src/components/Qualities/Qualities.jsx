import React from "react";
import Quality from "./Quality/Quality";
import style from "./Qualities.module.css"

class Qualities extends React.Component {

    render = () => {

        let newQualities = this.props.qualities.map((quality, index) => {
            return <Quality
                key={quality.id}
                quality={quality.quality}
                styles={index === 1 ? "secondQual" : "qual"}/>
        });

        return (
            <div className={style.qualities}>
            {newQualities}
            </div>
        );
    };
}

export default Qualities;