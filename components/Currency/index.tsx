import { useState } from "react";
import styles from "./Currency.module.sass";
import Card from "@/components/Card";
import Image from "@/components/Image";
import Select from "@/components/Select";

const currencies = [
    {
        title: "USD",
        value: "usd",
    },
    {
        title: "EUR",
        value: "eur",
    },
    {
        title: "CNY",
        value: "cny",
    },
    {
        title: "JPY",
        value: "jpy",
    },
];

type CurrencyType = {
    id: string;
    title: string;
    price: string;
    description: string;
    image: string;
};

type CurrencyProps = {
    viewItems?: number;
    items: CurrencyType[];
};

const Currency = ({ viewItems, items }: CurrencyProps) => {
    const [currency, setCurrency] = useState<string>(currencies[0].value);

    const handleChange = (value: string) => setCurrency(value);

    return (
        <Card
            title="Currency"
            tooltip="Small description"
            right={
                <div className={styles.box}>
                    <div className={styles.number}>1</div>
                    <Select
                        className={styles.select}
                        classToggle={styles.toggle}
                        value={currency}
                        onChange={handleChange}
                        options={currencies}
                        medium
                    />
                </div>
            }
        >
            <div className={styles.list}>
                {items.slice(0, viewItems || 3).map((item) => (
                    <div className={styles.item} key={item.id}>
                        <div className={styles.logo}>
                            <Image
                                src={item.image}
                                width={34}
                                height={34}
                                alt=""
                            />
                        </div>
                        <div className={styles.details}>
                            <div className={styles.title}>{item.title}</div>
                            <div className={styles.price}>{item.price}</div>
                            <div className={styles.description}>
                                {item.description}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
};

export default Currency;
