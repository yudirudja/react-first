import React from "react";

const Input = ({newTaskValue,setNewTaskValue}) => {
    return ( 

            <input
            type="text"
            placeholder="Input Task Here..."
            value={newTaskValue}
            onChange={(e) => setNewTaskValue(e.target.value)}/>

     );
}

export default Input;