import React from "react";
import Quality from "./Quality/Quality";

class Qualities extends React.Component {

    render = () => {

        let newQualities = this.props.qualities.map((quality, index) => {
            const qual = index === 1 ? "secondQual" : "qual";
            return <Quality key={quality.id} quality={quality.quality} styles={qual}/>
        });

        return (
            <div>
            {newQualities}
            </div>
        );
    };
}

export default Qualities;