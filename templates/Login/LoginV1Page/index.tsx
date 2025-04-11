import styles from "./LoginPage.module.sass";
import LayoutLogin from "@/components/LayoutLogin";
import Logo from "@/components/Logo";
import Image from "@/components/Image";

type LoginPageProps = {};

const LoginPage = ({}: LoginPageProps) => (
    <LayoutLogin
        classLeft={styles.left}
        left={
            <>
                <div className={styles.images}>
                    <div className={styles.image}>
                        <Image
                            src="/images/dashboard.png"
                            width={1004}
                            height={743}
                            style={{ width: "100%", height: "auto" }}
                            alt="Dashboard"
                        />
                    </div>
                    <div className={styles.image}>
                        <Image
                            src="/images/balance-card.png"
                            width={312}
                            height={186}
                            style={{ width: "100%", height: "auto" }}
                            alt="Balance Card"
                        />
                    </div>
                </div>
                <div className={styles.wrap}>
                    <Logo className={styles.logo} />
                    <div className={styles.title}>
                        Let’s empower your financial task today with Findash.
                    </div>
                    <div className={styles.text}>
                        The one-stop platform for all financial management of
                        small and medium-sized business.
                    </div>
                </div>
            </>
        }
    />
);

export default LoginPage;
