import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

// to be removed
interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [apiData, setApiData] = useState([]);

  // from fake users API
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);

  // from personal API
  useEffect(() => {
    axios
      .get('api/test')
      .then((res) => setApiData(res.data.body))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {/** to be removed */}
      <h1>Users</h1>
      <ul>
        {users.length > 4 &&
          users.slice(0, 3).map((user, id) => (
            <div key={user.id} style={{ marginBottom: '44px' }}>
              <h3>{user.name}</h3>
              <p>
                <i>username: </i>
                <strong>{user.username}</strong>
              </p>
              <p>
                <i>email: </i>
                <strong>{user.email}</strong>
              </p>
            </div>
          ))}
      </ul>
      <h2>{apiData}</h2>
    </div>
  );
}

export default App;
