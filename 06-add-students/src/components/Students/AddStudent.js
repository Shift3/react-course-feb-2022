import classes from './AddStudent.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';

const AddStudent = () => {
  return (
    <Card className={classes.input}>
      <form>
        <label htmlFor="fullName">Full Name</label>
        <input id="fullName" type="text"/>

        <label htmlFor="age">Age</label>
        <input id="age" type="number"/>

        <Button type="submit">Add Student</Button>
      </form>
    </Card>
  );
}

export default AddStudent;