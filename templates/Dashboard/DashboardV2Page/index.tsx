import styles from "./DashboardV2Page.module.sass";
import Layout from "@/components/Layout";
import Navigation from "@/components/Navigation";
import TotalBalance from "@/components/TotalBalance";
import PocketPlans from "@/components/PocketPlans";
import RecentActivity from "@/components/RecentActivity";
import Currency from "@/components/Currency";
import ExpenseCategory from "@/components/ExpenseCategory";
import IncomeAnalysis from "@/components/IncomeAnalysis";
import ExpenseAnalysis from "@/components/ExpenseAnalysis";

import { plans } from "@/mocks/plans";
import { activity } from "@/mocks/activity";
import { currency } from "@/mocks/currency";
import { expenseCategory } from "@/mocks/expenseCategory";
import { incomeAnalysis } from "@/mocks/incomeAnalysis";
import { expenseAnalysis } from "@/mocks/expenseAnalysis";

const breadcrumbs = [
    {
        title: "Dashboard",
        url: "/",
    },
    {
        title: "Overview",
    },
];

type DashboardPageProps = {};

const DashboardPage = ({}: DashboardPageProps) => (
    <Layout
        title="Welcome back, Rainer Yaeger 👏🏻"
        breadcrumbs={breadcrumbs}
        head={<Navigation />}
    >
        <div className={styles.row}>
            <div className={styles.col}>
                <TotalBalance />
                <RecentActivity viewItems={5} items={activity} />
            </div>
            <div className={styles.col}>
                <IncomeAnalysis items={incomeAnalysis} expense="$2.172" row />
                <ExpenseAnalysis items={expenseAnalysis} expense="$1.456" row />
                <ExpenseCategory items={expenseCategory} />
            </div>
            <div className={styles.col}>
                <div className={styles.card}>
                    <PocketPlans items={plans} />
                </div>
                <div className={styles.card}>
                    <Currency items={currency} />
                </div>
            </div>
        </div>
    </Layout>
);

export default DashboardPage;
