import React, { useContext } from 'react';
import { UserContext } from '../../../../../../contexts/userContext';

const InnerChild = (props) => {
    const { user } = useContext(UserContext);
    const { firstName, lastName, avatar } = user;

    return (
        <div>
            InnerChild
            <p>{firstName} {lastName}</p>
            <img src={avatar} alt={`${firstName} ${lastName}`} style={{ width: '200px', height: '200px' }} />
        </div>
    )

}

export default InnerChild;