import { useState } from "react";
import cn from "classnames";
import styles from "./Analysis.module.sass";
import Card from "@/components/Card";
import Icon from "@/components/Icon";
import Select from "@/components/Select";

const durationOptions = [
    {
        title: "Monthly",
        value: "monthly",
    },
    {
        title: "Annually",
        value: "annually",
    },
];

type AnalysisProps = {
    title: string;
    tooltip: string;
    price: string;
    percent: number;
    expense?: string;
    children: React.ReactNode;
    row?: boolean;
};

const Analysis = ({
    title,
    tooltip,
    price,
    percent,
    expense,
    children,
    row,
}: AnalysisProps) => {
    const [duration, setDuration] = useState<string>(durationOptions[0].value);

    const handleChange = (value: string) => setDuration(value);

    return (
        <Card
            className={cn(styles.card, { [styles.cardRow]: row })}
            title={title}
            tooltip={tooltip}
            right={
                row && (
                    <Select
                        value={duration}
                        onChange={handleChange}
                        options={durationOptions}
                        small
                    />
                )
            }
        >
            <div className={cn(styles.analysis, { [styles.analysisRow]: row })}>
                <div className={styles.details}>
                    <div className={styles.box}>
                        <div className={styles.price}>{price}</div>
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
                            {!row && "VS This Month"}
                        </div>
                    </div>
                    {expense && (
                        <div
                            className={cn(
                                styles.expense,
                                percent < 0 && styles.negative
                            )}
                        >
                            Expense increased by <span>{expense}</span> This
                            Month
                        </div>
                    )}
                </div>
                {!row && (
                    <div className={styles.select}>
                        <Select
                            value={duration}
                            onChange={handleChange}
                            options={durationOptions}
                            small
                        />
                    </div>
                )}
                <div className={styles.chart}>{children}</div>
            </div>
        </Card>
    );
};

export default Analysis;
