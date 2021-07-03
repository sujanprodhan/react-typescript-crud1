import React, { ChangeEvent, useState, MouseEvent } from 'react';
import './App.css';
import Course from './components/course';

interface courseProp {
  courseName: string;
  courseDuration: number;
  courseTeacher: string;
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
  const addCourse = (event: MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (courseName && courseTeacher && courseDuration) {
      let newCourse = { courseName: courseName, courseTeacher: courseTeacher, courseDuration: courseDuration };
      setCourseList([...courseList, newCourse]);
      setCourseName("");
      setCourseDuration(1);
      setCourseTeacher("");
    }
    else {
      alert("Please fill all the fileds")
    }
  }

  const deleteCourse = (index: number) => {
    courseList.splice(index, 1);
    setCourseList([...courseList]);
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

        <div className="courselist">
          {
            courseList.map((course: courseProp, index: number) => {
              return <Course data={course} key={index} itemNo={index} deleteCourse={deleteCourse} />
            })
          }
        </div>
      </div>

    </div>
  );
}

export default App;
