import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
    const [listOfUsers, setListOfUsers] = useState([]);

    <div className='userList'>
    
    </div>
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            setListOfUsers(response.data);
        })
        .catch(error => {
            console.error('Error fetching users:', error);
        });
    }, []);

    return (
        <div style= {{background: 'linear-gradient(to right, gray, skyblue)'}} className="go">
        <h1>User List</h1>
        {listOfUsers.map(user => (
            <div key={user.id}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Username: {user.username}</p>
            <hr />
            </div>
        ))}
        </div>
    );
    
};

export default UserList;
