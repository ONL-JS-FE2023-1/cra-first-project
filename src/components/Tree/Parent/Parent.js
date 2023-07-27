import React from 'react';
import Subparent from './Subparent/Subparent';

const Parent = (props) => {
    return (
        <div style={{border: '3px solid black', padding: '25px'}}>
            Parent
            <Subparent />
        </div>
    );
}

export default Parent;
