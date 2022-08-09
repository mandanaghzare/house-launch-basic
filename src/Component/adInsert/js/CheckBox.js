import React, { useState } from "react";
const Checkbox = props => {

    const [isChecked, setIsChecked] = useState(false);

    const handleChange = e => {
       setIsChecked(!isChecked);
    }

    return (
    //    <input value={props.value} type='checkbox' onChange={handleChange} checked={isChecked} />
        
    <label>
        <input type="checkbox" checked={isChecked} onChange={handleChange} />
        {props.value}
    </label>
    );
}
export default Checkbox;