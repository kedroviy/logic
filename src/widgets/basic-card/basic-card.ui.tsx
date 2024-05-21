import { FC } from "react"
import styles from './basic.card.module.scss';

type BasicCardType = {
    name: string;
    image: string;
    bgColor: string;
}

export const BasicCard: FC<BasicCardType> = ({ name, image, bgColor }) => {
    return (
        <div
            className={styles.container__frame}
            style={{
                backgroundColor: bgColor
            }}
        >
            <div className={styles.frame_image}>
                <img
                    src={image}
                    alt={name}
                />
            </div>
            <div
                className={styles.frame_description}
            >
                <span className={styles.text}>{name}</span>
            </div>
        </div>
    )
}