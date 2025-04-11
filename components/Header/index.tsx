import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import cn from "classnames";
import styles from "./Header.module.sass";
import Logo from "@/components/Logo";
import Image from "@/components/Image";
import Search from "@/components/Search";
import Icon from "@/components/Icon";
import Notifications from "./Notifications";

import { notifications } from "@/mocks/notifications";

const navigation = [
    {
        title: "Dashboard",
        url: "/dashboard",
    },
    {
        title: "Wallets",
        url: "/wallets",
    },
    {
        title: "Settings",
        url: "/settings",
    },
    {
        title: "Help & Center",
        url: "/help-center",
    },
];

type HeaderProps = {};

const Header = ({}: HeaderProps) => {
    const [visible, setVisible] = useState<boolean>(false);
    const [search, setSearch] = useState<string>("");
    const [visibleSearch, setVisibleSearch] = useState<boolean>(false);

    const router = useRouter();

    const toggleMenu = () => {
        setVisible(!visible);
        if (visible) {
            enablePageScroll();
        } else {
            disablePageScroll();
        }
    };

    const closeMenu = () => {
        setVisible(false);
        enablePageScroll();
    };

    return (
        <>
            <header className={styles.header}>
                <button
                    className={cn(styles.burger, {
                        [styles.active]: visible,
                    })}
                    onClick={toggleMenu}
                >
                    <Icon name="burger" />
                </button>
                <div
                    className={cn(styles.wrap, {
                        [styles.visible]: visible,
                    })}
                >
                    <Logo className={styles.logo} />
                    <nav className={styles.navigation}>
                        {navigation.map((link, index) => (
                            <Link
                                className={cn(styles.link, {
                                    [styles.active]:
                                        router.pathname === link.url ||
                                        router.pathname.startsWith(link.url),
                                })}
                                href={link.url}
                                key={index}
                            >
                                {link.title}
                            </Link>
                        ))}
                    </nav>
                    <Link className={styles.logout} href="/login">
                        Log Out
                    </Link>
                    <button className={styles.close} onClick={closeMenu}>
                        <Icon name="close" />
                    </button>
                </div>
                <div className={styles.control}>
                    <button
                        className={cn(styles.openSearch)}
                        onClick={() => setVisibleSearch(true)}
                    >
                        <Icon name="search" size="22" />
                    </button>
                    <div
                        className={cn(styles.box, {
                            [styles.visible]: visibleSearch,
                        })}
                    >
                        <Search
                            className={styles.search}
                            classInput={styles.input}
                            placeholder="Search anything here"
                            value={search}
                            onChange={(e: any) => setSearch(e.target.value)}
                            onSubmit={() => console.log("Submit")}
                            light
                        />
                        <button
                            className={cn(styles.closeSearch)}
                            onClick={() => setVisibleSearch(false)}
                        >
                            <Icon name="close" size="22" />
                        </button>
                    </div>
                    <Notifications items={notifications} />
                    <Link className={styles.avatar} href="/settings">
                        <Image
                            src="/images/avatar.jpg"
                            fill
                            style={{ objectFit: "cover" }}
                            alt="Avatar"
                        />
                    </Link>
                </div>
                <div
                    className={cn(styles.overlay, {
                        [styles.visible]: visible,
                    })}
                    onClick={closeMenu}
                ></div>
            </header>
        </>
    );
};

export default Header;
