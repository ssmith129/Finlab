import styles from "./LoginPage.module.sass";
import LayoutLogin from "@/components/LayoutLogin";
import Image from "@/components/Image";
import Logo from "@/components/Logo";

type LoginPageProps = {};

const LoginPage = ({}: LoginPageProps) => (
    <LayoutLogin
        classLeft={styles.left}
        background="#1A1C1E"
        left={
            <Image
                src="/images/login-pic.jpg"
                fill
                style={{ objectFit: "cover", objectPosition: "50% 20%" }}
                sizes="(max-width: 768px) 100vw, 50vw"
                alt="Dashboard"
            />
        }
        right={
            <div className={styles.head}>
                <Logo className={styles.logo} />
                <div className={styles.title}>Welcome back to Findash</div>
                <div className={styles.info}>
                    Let’s empower your financial task today with Findash.
                </div>
            </div>
        }
    />
);

export default LoginPage;
