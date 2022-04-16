import React, { useState } from 'react';
import "./sidebar.css";


export function SideBar(props)
{
    const [value, setValue] = useState(0);
    const [iseven, setIsEven] = useState(true);

    return (
        <div className='clicker' onClick={() => {
            setValue(value + 1);
            setIsEven((value + 1) % 2 == 0);
        }}>Test value is {value}. Is it even? {`${iseven}`}</div>
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