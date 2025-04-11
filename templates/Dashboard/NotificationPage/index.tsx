import { useState } from "react";
import cn from "classnames";
import styles from "./NotificationPage.module.sass";
import Layout from "@/components/Layout";
import Search from "@/components/Search";
import Notification from "@/components/Notification";
import DatePicker from "@/components/DatePicker";

import { notifications } from "@/mocks/notifications";

const breadcrumbs = [
    {
        title: "Dashboard",
        url: "/",
    },
    {
        title: "Notification",
    },
];

type NotificationPageProps = {};

const NotificationPage = ({}: NotificationPageProps) => {
    const [search, setSearch] = useState<string>("");
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    return (
        <Layout
            classHead={styles.layoutHead}
            classBody={styles.layoutBody}
            title="Notification 👏🏻"
            breadcrumbs={breadcrumbs}
        >
            <div className={styles.notifications}>
                <div className={styles.head}>
                    <Search
                        className={styles.search}
                        placeholder="Search Notification"
                        value={search}
                        onChange={(e: any) => setSearch(e.target.value)}
                        onSubmit={() => console.log("Submit")}
                    />
                    <DatePicker
                        className={styles.datepicker}
                        selectsRange={true}
                        startDate={startDate}
                        endDate={endDate}
                        onChange={(update: any) => {
                            setDateRange(update);
                        }}
                        dateFormat="MM.dd.yyyy"
                        placeholderText="Range date"
                        medium
                        icon
                    />
                </div>
                <div className={styles.list}>
                    {notifications.map((notification) => (
                        <Notification
                            item={notification}
                            key={notification.id}
                        />
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default NotificationPage;
