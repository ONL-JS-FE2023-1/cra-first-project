import React from 'react';

const Child = (props) => {
    console.log(props);
    return (
        <article>
            {props.children}
        </article>
    );
}

export default Child;
