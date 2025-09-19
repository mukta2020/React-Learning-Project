import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
const [enteredUsername, setEnteredUsername] = useState('');
const [enteredAge, setEnteredAge] = useState('');
const [error, setError] = useState();

const addUserHandler = (event) =>{
event.preventDefault();
if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
    setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
    return;
  }
  if (+enteredAge < 1) {
    setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
    return;
  }
  props.onAddUser(enteredUsername, enteredAge);  
  console.log(enteredUsername, enteredAge);

  setEnteredUsername('');
  setEnteredAge('');
    };

const usernameChangeHandler = (event)=>{
//console.log(event.target.value);
setEnteredUsername(event.target.value);
};

const ageChangeHandler = (event) =>{
//console.log(event.target.value);
setEnteredAge(event.target.value);
};

const errorHandler = () => {
    setError(null);
  };


return (
<Card className={classes.input}>


    {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      
    <form  onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input 
        id="username" 
        type="text"
        value={enteredUsername}
        onChange={usernameChangeHandler} ></input>

        <label htmlFor='age'>Age</label>
        <input
         id="age" 
         type="number"
         value={enteredAge}
         onChange={ageChangeHandler} ></input>

        <button type='submit'> Add User</button>

    </form>
</Card>
);

};

export default AddUser;