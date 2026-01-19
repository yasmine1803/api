import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import UserList from './UserList';

function App() {
  
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setListOfUser(response.data);
      });
  }, []);

  return (
    <div className="App">
      {listOfUser.map((user) => (
        <UserList key={user.id} user={user} />
      ))}
    </div>
  );
}

export default App;
