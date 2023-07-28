import React from 'react';
import Subparent from './Subparent/Subparent';

const Parent = (props) => {
    return (
        <div>
            Parent
            <Subparent />
        </div>
    );
}

export default Parent;
