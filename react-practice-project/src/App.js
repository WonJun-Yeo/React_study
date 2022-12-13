import React, {useState} from 'react';
import AddUser from "./Users/AddUser";
import UsersList from "./Users/UsersList";


function App() {
  const [userList, setUserList] = useState([]);

  const handleOnClickAddUser = (uName, uAge) => {
    setUserList(prevState => {
      return [...prevState, { name: uName, age: uAge, id: Math.random().toString() }]
    })
  }

  return (
    <div>
      <AddUser onAddUser={handleOnClickAddUser}/>
      <UsersList users={userList} />
    </div>
  );
}

export default App;
