import React from 'react';
import style from './ShowName.module.css';


const ShowName = (props) => {
    const {names} = props;
    return (
        <div className={style.names}>{names.map(n => <div>{n.name}</div>)}</div>
    );
};


export default ShowName;