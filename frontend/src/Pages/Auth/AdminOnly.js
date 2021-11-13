import React from 'react';

export default function AdminOnly() {
    return (
        <>
            <h1>Welcome to the Admin Only page</h1>
            <hr></hr>
            <p>If you are here then the isAdmin flag is set to true</p>
        </>
    )
}
