import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { enablePageScroll, clearQueueScrollLocks } from "scroll-lock";
import Head from "next/head";
import cn from "classnames";
import styles from "./Layout.module.sass";
import Header from "@/components/Header";
import Icon from "@/components/Icon";

type BreadcrumbsType = {
    title: string;
    url?: string;
};

type LayoutProps = {
    classHead?: string;
    classBody?: string;
    title: string;
    breadcrumbs: BreadcrumbsType[];
    head?: React.ReactNode;
    children: React.ReactNode;
};

const Layout = ({
    classHead,
    classBody,
    title,
    breadcrumbs,
    head,
    children,
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
            <div className={styles.layout}>
                <div className={cn(styles.head, classHead)}>
                    <div className={cn("container", styles.container)}>
                        <Header />
                        <div className={styles.title}>{title}</div>
                        <div className={styles.breadcrumbs}>
                            {breadcrumbs.map((item, index) =>
                                item.url ? (
                                    <Link
                                        className={styles.link}
                                        href={item.url}
                                        key={index}
                                    >
                                        {item.title}
                                    </Link>
                                ) : (
                                    <div className={styles.text} key={index}>
                                        <Icon name="arrow-next" size="12" />
                                        {item.title}
                                    </div>
                                )
                            )}
                        </div>
                        {head}
                    </div>
                </div>
                <div className={cn(styles.body, classBody)}>
                    <div className={cn("container", styles.container)}>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Layout;
