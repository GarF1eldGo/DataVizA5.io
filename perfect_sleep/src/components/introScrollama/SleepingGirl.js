import React, {useState, useEffect} from "react";
import * as d3 from "d3";
import Component1 from "./NarrativeComponent/Component1";

const Component2 = () => {
    return (
        <div>
            <h1>Component2</h1>
        </div>
    );
}

const SleepingGirl = (props) => {
    const [avgSleep, setAvgSleep] = useState(0);
    const [index, setIndex] = useState(0);

    const handleStorageChange = () => {
        var val = sessionStorage.getItem("avgSleep");
        val = parseFloat(val);
        if (val) {
            setAvgSleep(Math.round(val*2)/2);
        }
    }

    useEffect(() => {
        setIndex(props.value);
    }, [props.value]);

    useEffect(() => {
        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        }
    }, []);

    return (
        <div className="sleepGirlContainer">
            {index === 0 ? <Component1 avgSleep={avgSleep}/> : <Component2/>}
        </div>
    );
}

export default SleepingGirl;