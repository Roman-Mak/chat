import React from 'react';
import style from './Message.module.css'
import ava from './wolf.jpg'

const Message = () => {
    return (
        <div className={style.message}>
            <img className={style.avatar} src={ava}/>
            <div className={style.corner}></div>
            <div className={style.messageArea}>
                <div className={style.name}>Роман Макаревич</div>
                <div className={style.content}>Выполнил первое задание))))</div>
                <div className={style.time}>07:15</div>
            </div>
        </div>
    )
}

export default Message