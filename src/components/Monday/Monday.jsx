import React from 'react';
import Message from "./Message/Message";
import Qualities from "./Qualities/Qualities";
import CounterNames from "./CounterNames/CounterNames";

const Monday = (props) => {
    return (
        <div className="monday">
            <Message/>
            <Qualities/>
            <CounterNames/>
        </div>
    );
};

export default Monday;
