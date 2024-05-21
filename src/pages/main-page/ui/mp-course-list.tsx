import { ICourse } from "core";
import { FC } from "react";
import { BasicCard } from "widgets/basic-card";
import styles from './mp-course.module.scss';

type CourseListType =  {
    courses: ICourse[];
}

export const MPCourseList: FC<CourseListType> = ({ courses }) => {
    return (
        <div className={styles.courseList}>
            {courses.map((course: ICourse) => (
                <BasicCard
                    key={course.id}
                    name={course.name}
                    image={course.image}
                    bgColor={course.bgColor}
                />
            ))}
        </div>
    );
};
