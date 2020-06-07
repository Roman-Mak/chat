import React from "react";
import Quality from "./Quality/Quality";
import style from "./Qualities.module.css"

class Qualities extends React.Component {
    state = {
        qualities: [
            {quality: "Ловкий", id: 1},
            {quality: "Сильный", id: 2},
            {quality: "Смелый", id: 3}
        ]
    };

    render = () => {
        let newQualities = this.state.qualities.map((quality, index) => {
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