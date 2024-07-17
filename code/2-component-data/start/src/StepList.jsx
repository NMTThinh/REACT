import React from "react";
import "./StepList.css";

function StepList(props){
    const stepListItems = props.stepbystep.map((step, index )=>{
        return(
            <li key={index} className={ step.thesteps ? 'thesteps' : '' }>
                { step.thestep }
            </li>
        );
    });
    return (
        <ol>
            { stepListItems }
        </ol>
    );
}
export default StepList;