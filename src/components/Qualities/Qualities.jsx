import React from "react";
import Quality from "./Quality/Quality";
import style from "././Quality/Quality.module.css"

class Qualities extends React.Component {

    render = () => {

        let newQualities = this.props.qualities.map((quality, index) =>
            index === 1 ? <Quality key={quality.id} quality={quality.quality} styles={style.secondQual}/> :
            <Quality key={quality.id} quality={quality.quality} styles={style.qual}/>);

        return (
            <div>
            {newQualities}
            </div>
        );
    };
}

export default Qualities;