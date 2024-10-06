import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // Fetch data from the backend
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get('http://localhost:3000/users');  // Ensure this URL is correct
                setUsers(res.data);  // Set users data from the response
            } catch (err) {
                console.error(err);
                setError('Failed to fetch users');
            } finally {
                setLoading(false);  // End loading state
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h1>User List</h1>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name} - {user.email}</li> 
                ))}
            </ul>
        </div>
    );
}

export default App;
