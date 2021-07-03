interface courseProp {
    courseName: string;
    courseDuration: number;
    courseTeacher: string;
}

interface dataProps {
    data: courseProp
}

const Course = ({ data }: dataProps) => {
    return (<div className="course">
        <div className="course-name"> {data.courseName} </div>
        <div className="course-name"> {data.courseDuration} </div>
        <div className="course-name"> {data.courseTeacher} </div>
        <div className="course-name delete"> Delete </div>
    </div>
    )
}
export default Course;