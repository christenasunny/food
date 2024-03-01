// ReadMessage.js

import { useEffect, useState } from 'react';
import axios from 'axios';
import './ReadMessage.css'; // Ensure correct path to your CSS file

export default function ReadMessage() {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get('https://online-food-website.onrender.com/GetUser')
            .then((result) => {
                console.log(result.data);
                const filteredList = result.data.filter(user => !user.isAdmin);
                setList(filteredList);
                setLoading(false)
            })
            .catch((err) => console.log("error"));
    }, []);

    return (
        <div className="table-container read-message-container">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Email</th>
                        <th scope="col">Message</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((user) => (
                        user.message ? (
                            <tr key={user.id}>
                                <td className="email-column">{user.email}</td>
                                <td className="message-column">{user.message}</td>
                            </tr>
                        ) : null
                    ))}
                </tbody>
            </table>
        </div>
    );
}
