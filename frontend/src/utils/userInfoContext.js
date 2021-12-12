import React from 'react';

const UserInfoContext = React.createContext(
    {
    firstName: '',
    lastName: '',
    userEmail: '',
    userName: '',
    password: '',
    isAdmin: false
    }
);

export default UserInfoContext;
