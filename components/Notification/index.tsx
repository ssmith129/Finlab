import styles from "./Notification.module.sass";
import Image from "@/components/Image";

type NotificationProps = {
    item: any;
};

const Notification = ({ item }: NotificationProps) => (
    <div className={styles.notification}>
        <div className={styles.icon}>
            <Image
                src={`/images/${
                    (item.type === "success" && "success.svg") ||
                    (item.type === "recheive" && "recheive.svg")
                }`}
                width={24}
                height={24}
                alt=""
            />
        </div>
        <div className={styles.details}>
            <div className={styles.line}>
                <div className={styles.title}>{item.title}</div>
                <div className={styles.time}>{item.time}</div>
                {item.new && <div className={styles.new}>{item.new}</div>}
            </div>
            <div className={styles.info}>{item.info}</div>
        </div>
    </div>
);

export default Notification;
