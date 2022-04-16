import React, { useState } from 'react';
import "./sidebar.css";


export function SideBar(props)
{
    const [value, setValue] = useState(0);

    return (
        <div className='clicker' onClick={() => {
            setValue(value + 1);
        }}>Test value is {value}</div>
    );
}

// class SideBar extends React.Component
// {
//     constructor (props)
//     {
//         super(props);
//     }
//     
// }