import type { NextPage } from "next";
import { useRouter } from "next/router";
import WalletPage from "@/templates/Wallets/WalletPage";

const Wallet: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;

    return <WalletPage id={id} />;
};

export default Wallet;
