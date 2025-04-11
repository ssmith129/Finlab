import { useEffect } from "react";
import { useRouter } from "next/router";
import cn from "classnames";
import { enablePageScroll, clearQueueScrollLocks } from "scroll-lock";
import Head from "next/head";
import styles from "./LayoutLogin.module.sass";
import Login from "@/components/Login";

type LayoutProps = {
    background?: string;
    classLeft?: string;
    classRight?: string;
    left: React.ReactNode;
    right?: React.ReactNode;
};

const Layout = ({
    background,
    classLeft,
    classRight,
    left,
    right,
}: LayoutProps) => {
    const { pathname } = useRouter();

    useEffect(() => {
        clearQueueScrollLocks();
        enablePageScroll();
    }, [pathname]);

    return (
        <>
            <Head>
                <title>Finlab</title>
            </Head>
            <div
                className={styles.layout}
                style={{ backgroundColor: background || "#F4F4F7" }}
            >
                <div className={cn(styles.left, classLeft)}>{left}</div>
                <div className={cn(styles.right, classRight)}>
                    <div className={styles.inner}>
                        <div className={styles.wrap}>
                            {right}
                            <Login />
                        </div>
                        <div className={styles.copyright}>
                            © 2022 Finlab. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Layout;
