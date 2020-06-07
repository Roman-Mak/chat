import React from 'react';
import Message from "../Message/Message";
import Qualities from "../Qualities/Qualities";
import CounterNames from "../Counter/CounterNames";

const Monday = (props) => {
    return (
        <div className="flex">
            <Message/>
            <Qualities/>
            <CounterNames/>
        </div>
    );
};

export default Monday;
