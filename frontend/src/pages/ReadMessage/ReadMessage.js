// ReadMessage.js

import { useEffect, useState } from 'react';
import axios from 'axios';
import './ReadMessage.css'; // Ensure correct path to your CSS file

export default function ReadMessage() {
    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/GetUser')
            .then((result) => {
                console.log(result.data);
                const filteredList = result.data.filter(user => !user.isAdmin);
                setList(filteredList);
            })
            .catch((err) => console.log("error"));
    }, []);

    return (
        <div className="read-message-container">
            <ul className="list-group">
                {list.map((user) => (
                    <li key={user.id} className="list-group-item">
                        <div className="user-info">
                            <div className="row">
                                <div className="col">
                                    <p className="user-name">{user.name}</p>
                                    <p className="user-email">email: {user.email}</p>
                                </div>
                                <div className="col">
                                    <p className="user-message">{user.message}</p>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
