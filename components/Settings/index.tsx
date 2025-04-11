import { useRouter } from "next/router";
import Link from "next/link";
import cn from "classnames";
import styles from "./Settings.module.sass";
import Card from "@/components/Card";
import Icon from "@/components/Icon";

const navigation = [
    {
        title: "Personal Information",
        icon: "user",
        url: "/settings",
    },
    {
        title: "Preferences",
        icon: "preferences",
        url: "/settings/preferences",
    },
    {
        title: "Security",
        icon: "security",
        url: "/settings/security",
    },
    {
        title: "Log Out",
        icon: "logout",
        url: "/login",
    },
];

type SettingsProps = {
    title: string;
    tooltip: string;
    children: React.ReactNode;
};

const Settings = ({ title, tooltip, children }: SettingsProps) => {
    const router = useRouter();

    return (
        <div className={styles.settings}>
            <div className={styles.menu}>
                {navigation.map((link, index) => (
                    <Link
                        className={cn(styles.link, {
                            [styles.active]: router.pathname === link.url,
                        })}
                        href={link.url}
                        key={index}
                    >
                        <div className={styles.icon}>
                            <Icon name={link.icon} size="20" />
                        </div>
                        {link.title}
                        <Icon
                            className={styles.arrow}
                            name="arrow-next"
                            size="20"
                        />
                    </Link>
                ))}
            </div>
            <Card className={styles.card} title={title} tooltip={tooltip}>
                <div className={styles.wrap}>{children}</div>
            </Card>
        </div>
    );
};

export default Settings;
