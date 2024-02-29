import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Messages() {
    const [list, setList] = useState([])

    useEffect(() => {
        axios.get('https://online-food-website.onrender.com/GetUser')
            .then((result) => {
                console.log(result.data)
                const filteredList = result.data.filter(user => !user.isAdmin);
                setList(filteredList);
            })
            .catch((err) => console.log("error"))
    }, [])


    return (
        <div className='mt-9'>
            <table className="table table-bordered table-dark ">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Wallet</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((user) => (
                        
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                {user.message} 
                              </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
