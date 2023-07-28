import React from 'react';
import SubparentWithTheme from './Subparent/Subparent';

const Parent = (props) => {
    return (
        <div>
            Parent
            <SubparentWithTheme />
        </div>
    );
}

export default Parent;
