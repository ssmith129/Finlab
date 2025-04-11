import styles from "./WalletsPage.module.sass";
import Layout from "@/components/Layout";
import TotalBalance from "@/components/TotalBalance";
import CardLists from "@/components/CardLists";
import BalanceAnalytics from "@/components/BalanceAnalytics";
import QuickTransfer from "@/components/QuickTransfer";
import Currency from "@/components/Currency";

import { creditCards } from "@/mocks/creditCards";
import { balanceAnalytics } from "@/mocks/balanceAnalytics";
import { contacts } from "@/mocks/contacts";
import { currency } from "@/mocks/currency";

const breadcrumbs = [
    {
        title: "Wallets",
        url: "/wallets",
    },
    {
        title: "Overview",
    },
];

type WalletsPageProps = {};

const WalletsPage = ({}: WalletsPageProps) => (
    <Layout title="Wallets" breadcrumbs={breadcrumbs}>
        <div className={styles.row}>
            <div className={styles.col}>
                <TotalBalance percent={3.1} />
                <CardLists items={creditCards} />
            </div>
            <div className={styles.col}>
                <BalanceAnalytics items={balanceAnalytics} />
                <div className={styles.line}>
                    <div className={styles.cell}>
                        <QuickTransfer contacts={contacts} />
                    </div>
                    <div className={styles.cell}>
                        <Currency items={currency} viewItems={4} />
                    </div>
                </div>
            </div>
        </div>
    </Layout>
);

export default WalletsPage;
