import Card from '../UI/Card';
import classes from './StudentsList.module.css';

const StudentsList = (props) => {
  return (
    <Card className={classes.students}>
      <ul>
        {props.students.map(student => (
          <li key={student.id}>
            {student.fullname} ({student.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default StudentsList;