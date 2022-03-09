import { useState } from 'react';
import classes from './AddStudent.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddStudent = (props) => {
  const [ fullName, setFullName ] = useState('');
  const [ age, setAge ] = useState('');
  const [ error, setError ] = useState();

  const addStudentHandler = (e) => {
    e.preventDefault();
    if(fullName.trim().length === 0 || age.trim().length === 0){
      setError({
        title: 'Invalid inputs',
        message: 'Name and age are required'
      });
      return;
    }

    if(age < 1){
      setError({
        title: 'Invalid age',
        message: 'Enter a valid age greater than 0'
      });
      return;
    }

    props.onAddStudent(fullName, age);
    setFullName('');
    setAge('');

  };

  const errorHandler = () => {
    setError(null);
  }

  return (
    <>
      { error && (
        <ErrorModal 
          title={ error.title }
          message={ error.message }
          onConfirm = { errorHandler }
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addStudentHandler}>
          <label htmlFor="fullName">Full Name</label>
          <input 
            id="fullName" 
            type="text" 
            value={fullName} 
            onChange={e => setFullName(e.target.value)} />

          <label htmlFor="age">Age</label>
          <input 
            id="age" 
            type="number" 
            value={age} 
            onChange={e => setAge(e.target.value)}/>

          <Button type="submit">Add Student</Button>
        </form>
      </Card>
    </>
  );
}

export default AddStudent;