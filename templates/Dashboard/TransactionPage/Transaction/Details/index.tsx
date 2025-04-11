import cn from "classnames";
import styles from "./Details.module.sass";

type DetailsProps = {
    item: any;
};

const Details = ({ item }: DetailsProps) => (
    <div className={styles.details}>
        <div className={styles.cell}>
            <div className={styles.label}>Paid By</div>
            <div className={styles.text}>{item.paidBy}</div>
        </div>
        <div className={styles.cell}>
            <div className={styles.label}>Account Type</div>
            <div className={styles.text}>{item.accountType}</div>
        </div>
        <div className={styles.cell}>
            <div className={styles.transfer}>Transfer send</div>
            <div className={styles.date}>{item.transferSend}</div>
        </div>
        <div className={styles.cell}>
            <div className={styles.transfer}>Transfer Receive</div>
            <div className={styles.date}>{item.transferReceive}</div>
        </div>
        <div className={styles.cell}>
            <div className={styles.label}>Account Number</div>
            <div className={styles.text}>{item.accountNumber}</div>
        </div>
        <div className={styles.cell}>
            <div className={styles.label}>Transaction id</div>
            <div className={styles.text}>{item.transactionId}</div>
        </div>
        <div className={styles.cell}>
            <button className={cn("button-wide", styles.button)}>Print</button>
        </div>
    </div>
);

export default Details;
