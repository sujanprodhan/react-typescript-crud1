import React, { ChangeEvent, useState } from 'react';
import './App.css';

interface courseProp{
  courseName: string;
  courseDuration: number;
  courseTeacher:string;
}
const App: React.FC = () => {
  const [courseName, setCourseName] = useState<string>("");
  const [courseDuration, setCourseDuration] = useState<number>(1);
  const [courseTeacher, setCourseTeacher] = useState<string>("");
  const [courseList, setCourseList] = useState<courseProp[]>([]);

  const handleCourseName = (event: ChangeEvent<HTMLInputElement>): void => {
    setCourseName(event?.target.value);
  }
  const handleCourseDuration = (event: ChangeEvent<HTMLInputElement>): void => {
    setCourseDuration(Number(event?.target.value));
  }
  const handleCourseTeacher = (event: ChangeEvent<HTMLInputElement>): void => {
    setCourseTeacher(event?.target.value);
  }
  const addCourse =():void => {
    let newCourse = {courseName: courseName, courseTeacher:courseTeacher,courseDuration: courseDuration};
    setCourseList([...courseList, newCourse]);
  }

  return (
    <div className="App">
      <div className="basic-form">
        <div className="input-form">
          <form>
            <input
              type="text"
              name="name"
              value={courseName}
              placeholder="Enter course name..."
              required={true}
              className="input"
              onChange={handleCourseName}
            />
            <input
              type="number"
              name="name"
              value={courseDuration}
              placeholder="Enter course duration..."
              required={true}
              className="input"
              onChange={handleCourseDuration}
              min={1}
            />
            <input
              type="text"
              name="name"
              value={courseTeacher}
              placeholder="Enter course teacher"
              required={true}
              className="input"
              onChange={handleCourseTeacher}
            />
            <input
              type="submit"
              value="Add Course"
              className="submit"
              onClick={addCourse}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
