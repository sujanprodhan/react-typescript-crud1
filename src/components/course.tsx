interface courseProp {
    courseName: string;
    courseDuration: number;
    courseTeacher: string;
}

interface dataProps {
    data: courseProp;
    itemNo: number;
    deleteCourse(index: number): void
}

const Course = ({ data, itemNo, deleteCourse }: dataProps) => {
    return (<div className="course">
        <div className=""> {data.courseName} </div>
        <div className=""> {data.courseDuration} </div>
        <div className=""> {data.courseTeacher} </div>
        <div className="delete" onClick={() => { deleteCourse(itemNo) }}> Delete</div>
    </div>
    )
}
export default Course;