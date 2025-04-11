import { useState } from "react";
import cn from "classnames";
import styles from "./Item.module.sass";
import Icon from "@/components/Icon";

type ItemType = {
    id: string;
    title: string;
    content: string;
    likes: number;
    tags: Array<string>;
};

type ItemProps = {
    item: ItemType;
};

const Item = ({ item }: ItemProps) => {
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <div className={styles.item}>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.content}>{item.content}</div>
            <div className={styles.line}>
                <div className={styles.tags}>
                    {item.tags.map((tag, index) => (
                        <div className={styles.tag} key={index}>
                            {tag}
                        </div>
                    ))}
                </div>
                <button
                    className={cn(styles.like, { [styles.active]: visible })}
                    onClick={() => setVisible(!visible)}
                >
                    <Icon name={visible ? "like-fill" : "like"} /> {item.likes}
                </button>
            </div>
        </div>
    );
};

export default Item;
