import cn from "classnames";
import styles from "./Pagination.module.sass";
import Icon from "@/components/Icon";

type PaginationProps = {};

const Pagination = ({}: PaginationProps) => (
    <div className={styles.pagination}>
        <button className={styles.prev}>
            <Icon name="arrow-prev" size="20" />
        </button>
        <button className={cn(styles.number, styles.active)}>1</button>
        <button className={styles.number}>2</button>
        <button className={styles.number}>3</button>
        <button className={styles.number}>...</button>
        <button className={styles.number}>99</button>
        <button className={styles.next}>
            <Icon name="arrow-next" size="20" />
        </button>
    </div>
);

export default Pagination;
