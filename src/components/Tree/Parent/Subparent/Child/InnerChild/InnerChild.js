import React, { useContext } from 'react';
import { UserContext } from '../../../../../../contexts/userContext';

const InnerChild = (props) => {
    const { user, logOut } = useContext(UserContext);
    const { firstName, lastName, avatar } = user;

    return (
        <div>
            InnerChild
            <p>{firstName} {lastName}</p>
            <img src={avatar} alt={`${firstName} ${lastName}`} style={{ width: '200px', height: '200px' }} />
            <button onClick={() => {logOut()}}>Logout</button>
        </div>
    )

}

export default InnerChild;