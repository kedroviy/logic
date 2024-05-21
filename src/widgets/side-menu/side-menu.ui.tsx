import { FC } from "react"
import styles from './side-menu.module.scss';

type SideMenuProps = {
    categories: string[];
    selectedTag: string | null;
    generalCategory: string;
    onTagClick: (tag: string) => void;
}

export const SideMenu: FC<SideMenuProps> = ({ categories, selectedTag, generalCategory, onTagClick }) => {
    return (
        <nav className={styles.container}>
            <button
                key={generalCategory}
                onClick={() => onTagClick(generalCategory)}
                className={selectedTag === generalCategory ? `${styles.text_selected} ${styles.selected}`
                    : `${styles.sidebar_frame} ${styles.text}`}
            >
                {generalCategory}
            </button>
            {categories.map(tag => (
                <button
                    key={tag}
                    onClick={() => onTagClick(tag)}
                    className={selectedTag === tag ? `${styles.text_selected} ${styles.selected}`
                        : `${styles.sidebar_frame} ${styles.text}`}
                >
                    {tag}
                </button>
            ))}
        </nav>
    )
}