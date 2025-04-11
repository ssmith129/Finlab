import { useState } from "react";
import cn from "classnames";
import styles from "./TotalBalance.module.sass";
import Card from "@/components/Card";
import Icon from "@/components/Icon";
import Transfer from "@/components/Transfer";
import Receive from "@/components/Receive";
import Select from "@/components/Select";

const cards = [
    {
        title: "**** 7189",
        image: "/images/master-card.svg",
        value: "7189",
    },
    {
        title: "**** 4234",
        image: "/images/visa.svg",
        value: "4234",
    },
    {
        title: "**** 1231",
        image: "/images/master-card.svg",
        value: "1231",
    },
    {
        title: "**** 5643",
        image: "/images/visa.svg",
        value: "5643",
    },
];

type TotalBalanceProps = {
    percent?: number;
};

const TotalBalance = ({ percent }: TotalBalanceProps) => {
    const [card, setCard] = useState<string>(cards[0].value);

    const handleChange = (value: string) => setCard(value);

    return (
        <Card
            title="Total Balance"
            tooltip="Small description"
            right={
                <Select
                    className={styles.select}
                    value={card}
                    onChange={handleChange}
                    options={cards}
                    small
                />
            }
        >
            <div className={styles.price}>
                $12,456,315 <Icon name="eye" size="18" />
            </div>
            {percent && (
                <div className={styles.line}>
                    <div
                        className={cn(
                            styles.indicator,
                            percent < 0 && styles.negative
                        )}
                    >
                        <Icon name="arrow-thick-right" size="12" />
                        {percent > 0 ? `+${percent}` : percent}%
                    </div>
                    Increate this Month
                </div>
            )}
            <div className={styles.btns}>
                <Transfer className={styles.button} />
                <Receive className={styles.button} />
            </div>
        </Card>
    );
};

export default TotalBalance;
