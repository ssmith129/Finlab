import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import DatePicker from "react-datepicker";
import cn from "classnames";
import styles from "./Navigation.module.sass";
import Icon from "@/components/Icon";

const navigation = [
    {
        title: "Overview",
        url: "/dashboard",
    },
    {
        title: "Transaction",
        url: "/dashboard/transaction",
    },
    {
        title: "Statistics",
        url: "/dashboard/statistics",
    },
];

type NavigationProps = {};

const Navigation = ({}: NavigationProps) => {
    const router = useRouter();

    const [startDate, setStartDate] = useState<any>(new Date());

    return (
        <div className={styles.navigation}>
            <nav className={styles.menu}>
                {navigation.map((link, index) => (
                    <Link
                        className={cn(styles.link, {
                            [styles.active]: router.pathname === link.url,
                        })}
                        href={link.url}
                        key={index}
                    >
                        {link.title}
                    </Link>
                ))}
            </nav>
            <div className={styles.date}>
                <DatePicker
                    dateFormat="MMM dd,yyyy"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                />
                <Icon name="calendar" />
            </div>
        </div>
    );
};

export default Navigation;
