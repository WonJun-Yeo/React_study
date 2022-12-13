import React, {useRef, useState} from 'react';
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button";
import ErrorModule from "../UI/ErrorModule";

const AddUser = (props) => {
  //
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState(null);

  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'InValid input',
        message: 'Please enter a valid name and age (non-empty values)'
      });
      return;
    }

    if(+enteredAge < 1) {
      setError({
        title: 'InValid age',
        message: 'Please enter a valid age (> 0)'
      });
      return;
    }

    props.onAddUser(enteredName, enteredAge);

    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  }

  const errorHandler = () => {
    setError(null);
  }

  return (
    <>
      {error && <ErrorModule title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor={'username'}>UserName</label>
          <input id={'username'} type={'text'} ref={nameInputRef}/>
          <label htmlFor={'age'}>Age (Years)</label>
          <input id={'age'} type={'number'} ref={ageInputRef}/>
          <Button onClick={addUserHandler}>Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;