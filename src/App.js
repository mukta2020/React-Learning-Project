import logo from './logo.svg';
import './App.css';
import AddUser from './Components/Users/AddUser';
import { useState } from 'react';
import UsersList from './Components/Users/UsersList';

function App() {
const [userList, setUsersList] = useState([]);

const addUserHandler = (uName, uAge) =>{
setUsersList( (prevUsersList) =>{
return [
  ...prevUsersList,
  {name:uName, age:uAge, id:Math.random().toString()},
];

} );
};

  return (
    <div >
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UsersList users = {userList}></UsersList>
    </div>
  );
}

export default App;
