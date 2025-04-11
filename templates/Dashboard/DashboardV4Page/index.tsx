import styles from "./DashboardV4Page.module.sass";
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
                <ExpenseCategory items={expenseCategory} column />
            </div>
            <div className={styles.col}>
                <IncomeAnalysis items={incomeAnalysis} expense="$2.172" row />
                <ExpenseAnalysis items={expenseAnalysis} expense="$1.456" row />
                <PocketPlans items={plans} row />
            </div>
            <div className={styles.col}>
                <div className={styles.card}>
                    <RecentActivity viewItems={4} items={activity} />
                </div>
                <div className={styles.card}>
                    <Currency viewItems={2} items={currency} />
                </div>
            </div>
        </div>
    </Layout>
);

export default DashboardPage;
