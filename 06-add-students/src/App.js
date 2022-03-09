import { useState } from 'react';
import AddStudent from './components/Students/AddStudent';
import StudentsList from './components/Students/StudentsList';

function App() {
  const [studentsList, setStudentsList] = useState([]);

  const addStudentHandler = (fullname, age) => {
    setStudentsList(prevList => {
      return [{
        fullname,
        age,
        id: Math.random().toString()
      },...prevList]
    });
  }

  return (
    <>
      <AddStudent onAddStudent = {addStudentHandler}/>
      <StudentsList students={studentsList}/>
    </>
    );
}

export default App;
