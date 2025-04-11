import { useState } from "react";
import styles from "./Login.module.sass";
import Entry from "./Entry";
import CreateAccount from "./CreateAccount";
import ForgotPassword from "./ForgotPassword";

type LoginProps = {};

const Login = ({}: LoginProps) => {
    const [login, setLogin] = useState<boolean>(true);
    const [password, setPassword] = useState<boolean>(false);

    return (
        <div className={styles.login}>
            {password ? (
                <ForgotPassword
                    onBack={() => setPassword(false)}
                    onLogin={() => setPassword(false)}
                />
            ) : login ? (
                <Entry
                    onForgotPassword={() => setPassword(true)}
                    onRegister={() => setLogin(false)}
                />
            ) : (
                <CreateAccount
                    onLogin={() => setLogin(true)}
                    onBack={() => setLogin(true)}
                />
            )}
        </div>
    );
};

export default Login;
