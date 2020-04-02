import React from 'react';
import style from './ShowName.module.css';


const ShowName = (props) => {
    return <div className={style.names}>{props.names.map(n => <div>{n.name}</div>)}</div>
};


export default ShowName;