import React, {useState} from 'react';
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button";
import ErrorModule from "../UI/ErrorModule";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  //
  const [enterUserName, setEnterUserName] = useState('');
  const [enterAge, setEnterAge] = useState('');
  const [error, setError] = useState(null);

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enterUserName.trim().length === 0 || enterAge.trim().length === 0) {
      setError({
        title: 'InValid input',
        message: 'Please enter a valid name and age (non-empty values)'
      });
      return;
    }

    if(+enterAge < 1) {
      setError({
        title: 'InValid age',
        message: 'Please enter a valid age (> 0)'
      });
      return;
    }

    props.onAddUser(enterUserName, enterAge);

    setEnterAge('');
    setEnterUserName('');
  }

  const handleOnChangeUserName = (event) => {
    //
    setEnterUserName(event.target.value);
  }

  const handleOnChangeAge = (event) => {
    //
    setEnterAge(event.target.value);
  }

  const errorHandler = () => {
    setError(null);
  }

  return (
    <Wrapper>
      {error && <ErrorModule title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor={'username'}>UserName</label>
          <input id={'username'} type={'text'} value={enterUserName} onChange={handleOnChangeUserName}/>
          <label htmlFor={'age'}>Age (Years)</label>
          <input id={'age'} type={'number'} value={enterAge} onChange={handleOnChangeAge}/>
          <Button onClick={addUserHandler}>Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;