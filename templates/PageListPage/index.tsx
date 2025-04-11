import Link from "next/link";
import styles from "./PageListPage.module.sass";

const PageListPage = () => {
    return (
        <div className={styles.list}>
            <Link className={styles.link} href="/login">
                Login version 1
            </Link>
            <Link className={styles.link} href="/login-v2">
                Login version 2
            </Link>
            <Link className={styles.link} href="/login-v3">
                Login version 3
            </Link>
            <Link className={styles.link} href="/login-v4">
                Login version 4
            </Link>
            <Link className={styles.link} href="/dashboard">
                Dashboard version 1
            </Link>
            <Link className={styles.link} href="/dashboard/dashboard-v2">
                Dashboard version 2
            </Link>
            <Link className={styles.link} href="/dashboard/dashboard-v3">
                Dashboard version 3
            </Link>
            <Link className={styles.link} href="/dashboard/dashboard-v4">
                Dashboard version 4
            </Link>
            <Link className={styles.link} href="/dashboard/transaction">
                Transaction
            </Link>
            <Link className={styles.link} href="/dashboard/statistics">
                Statistics
            </Link>
            <Link className={styles.link} href="/dashboard/notification">
                Notification
            </Link>
            <Link className={styles.link} href="/wallets">
                Wallets
            </Link>
            <Link className={styles.link} href="/wallets/wallet">
                Wallet
            </Link>
            <Link className={styles.link} href="/settings">
                Personal Info
            </Link>
            <Link className={styles.link} href="/settings/preferences">
                Preferences
            </Link>
            <Link className={styles.link} href="/settings/security">
                Security
            </Link>
            <Link className={styles.link} href="/help-center">
                Help & center
            </Link>
        </div>
    );
};

export default PageListPage;
