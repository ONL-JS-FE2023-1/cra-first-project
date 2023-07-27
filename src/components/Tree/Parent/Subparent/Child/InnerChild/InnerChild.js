import React from 'react';
import { UserContext } from '../../../../../../contexts/userContext';

const InnerChild = (props) => {
    return (
        <UserContext.Consumer>
            {({user, logOut}) => {
                const { firstName, lastName, avatar } = user;
                return (
                    <div style={{ border: '3px solid black', padding: '25px' }}>
                        InnerChild
                        <p>{firstName} {lastName}</p>
                        <img src={avatar} alt={`${firstName} ${lastName}`} style={{ width: '200px', height: '200px' }} />
                        <button onClick={logOut}>Logout</button>
                    </div>
                )
            }}
        </UserContext.Consumer>
    );
}

export default InnerChild;