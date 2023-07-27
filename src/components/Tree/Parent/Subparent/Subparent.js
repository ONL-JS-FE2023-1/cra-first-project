import React from 'react';
import Child from './Child/Child';

const Subparent = (props) => {
    return (
        <div style={{border: '3px solid black', padding: '25px'}}>
            Subparent
            <Child />
        </div>
    );
}

export default Subparent;
