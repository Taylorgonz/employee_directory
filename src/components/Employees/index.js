import React from "react";

function Employees(props) {
    return (
        
            <div >
                    {props.names.map(name => (
                        <h2>{name}</h2>
                    ))};
            </div>
    )
}

export default Employees;