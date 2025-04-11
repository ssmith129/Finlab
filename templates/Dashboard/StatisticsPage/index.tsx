import styles from "./StatisticsPage.module.sass";
import Layout from "@/components/Layout";
import Navigation from "@/components/Navigation";
import ExpenseCategory from "@/components/ExpenseCategory";
import IncomeAnalysis from "@/components/IncomeAnalysis";
import ExpenseAnalysis from "@/components/ExpenseAnalysis";
import BalanceStatistics from "@/components/BalanceStatistics";
import LastTransaction from "@/components/LastTransaction";

import { expenseCategory } from "@/mocks/expenseCategory";
import { incomeAnalysis } from "@/mocks/incomeAnalysis";
import { expenseAnalysis } from "@/mocks/expenseAnalysis";
import { balanceStatistics } from "@/mocks/balanceStatistics";
import { lastTransactions } from "@/mocks/transactions";

const breadcrumbs = [
    {
        title: "Dashboard",
        url: "/",
    },
    {
        title: "Statistics",
    },
];

type StatisticsPageProps = {};

const StatisticsPage = ({}: StatisticsPageProps) => (
    <Layout
        title="Welcome back, Rainer Yaeger 👏🏻"
        breadcrumbs={breadcrumbs}
        head={<Navigation />}
    >
        <div className={styles.row}>
            <div className={styles.col}>
                <div className={styles.line}>
                    <div className={styles.cell}>
                        <IncomeAnalysis items={incomeAnalysis} />
                    </div>
                    <div className={styles.cell}>
                        <ExpenseAnalysis items={expenseAnalysis} />
                    </div>
                </div>
                <ExpenseCategory items={expenseCategory} />
            </div>
            <div className={styles.col}>
                <BalanceStatistics items={balanceStatistics} />
                <LastTransaction items={lastTransactions} />
            </div>
        </div>
    </Layout>
);

export default StatisticsPage;
