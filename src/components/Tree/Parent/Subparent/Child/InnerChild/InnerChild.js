import React from 'react';
import { UserContext } from '../../../../../../contexts/userContext';

const InnerChild = (props) => {
    return (
        <UserContext.Consumer>
            {(value) => {
                const { firstName, lastName, avatar } = value;
                return (
                    <div style={{ border: '3px solid black', padding: '25px' }}>
                        InnerChild
                        <p>{firstName} {lastName}</p>
                        <img src={avatar} alt={`${firstName} ${lastName}`} style={{ width: '200px', height: '200px' }} />
                    </div>
                )
            }}
        </UserContext.Consumer>
    );
}

export default InnerChild;