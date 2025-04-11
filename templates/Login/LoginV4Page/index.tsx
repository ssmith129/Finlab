import styles from "./LoginPage.module.sass";
import LayoutLogin from "@/components/LayoutLogin";
import Logo from "@/components/Logo";
import Image from "@/components/Image";

type LoginPageProps = {};

const LoginPage = ({}: LoginPageProps) => (
    <LayoutLogin
        classLeft={styles.left}
        classRight={styles.right}
        background="#ffffff"
        left={
            <>
                <div className={styles.circles}>
                    <span></span>
                    <span></span>
                    <span></span>
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
