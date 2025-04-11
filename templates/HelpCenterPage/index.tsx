import { useState } from "react";
import cn from "classnames";
import styles from "./HelpCenterPage.module.sass";
import Layout from "@/components/Layout";
import Card from "@/components/Card";
import Search from "@/components/Search";
import Item from "./Item";

import { faqs } from "@/mocks/faqs";

const breadcrumbs = [
    {
        title: "Help & Center",
        url: "/help-center",
    },
    {
        title: "How do make transaction",
    },
];

const tags = ["Transfer", "Change card", "Flow"];

type HelpCenterPageProps = {};

const HelpCenterPage = ({}: HelpCenterPageProps) => {
    const [search, setSearch] = useState<string>("");

    return (
        <Layout title="Help & Center" breadcrumbs={breadcrumbs}>
            <div className={styles.row}>
                <div className={styles.box}>
                    <div className={styles.title}>Hi, Can we help you ?</div>
                    <div className={styles.text}>
                        Type your question or search by keyword here here
                    </div>
                    <Search
                        className={styles.search}
                        placeholder="Search here"
                        value={search}
                        onChange={(e: any) => setSearch(e.target.value)}
                        onSubmit={() => console.log("Submit")}
                        large
                    />
                    <div className={styles.label}>Popular Search</div>
                    <div className={styles.tags}>
                        {tags.map((tag, index) => (
                            <button
                                className={cn("button-stroke", styles.tag)}
                                key={index}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>
                <Card
                    className={styles.card}
                    title="Frequently Asked Questions"
                    tooltip="Small description"
                >
                    <div className={styles.list}>
                        {faqs.map((faq) => (
                            <Item item={faq} key={faq.id} />
                        ))}
                    </div>
                </Card>
            </div>
        </Layout>
    );
};

export default HelpCenterPage;
