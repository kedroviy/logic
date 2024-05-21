import { FC, useMemo, useState } from "react"
import { useFetchData, useUniqueTags } from "../../hooks/index";
import { CONSTANTS, ICourse, baseURL } from "../../core/index";
import { SideMenu } from "widgets/side-menu";
import { MPCourseList } from "./ui";
import styles from './main-page.module.scss';

export const MainPage: FC = () => {
    const { data: courses, loading, error } = useFetchData<ICourse[]>('/docs/courses.json', baseURL);
    const tags = useUniqueTags(courses || []);
    const [selectedTag, setSelectedTag] = useState<string | null>(CONSTANTS.ALL_CATEGORY);

    const filteredCourses = useMemo(() => {
        return courses && selectedTag !== CONSTANTS.ALL_CATEGORY
            ? courses.filter((course: ICourse) => course.tags.includes(selectedTag as string))
            : courses;
    }, [courses, selectedTag]);

    const handleTagClick = (tag: string) => {
        setSelectedTag(tag);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <main className={styles.container}>
            <SideMenu
                categories={tags}
                selectedTag={selectedTag}
                onTagClick={handleTagClick}
                generalCategory={CONSTANTS.ALL_CATEGORY}
            />
            <MPCourseList courses={filteredCourses as ICourse[]} />
        </main >
    )
}