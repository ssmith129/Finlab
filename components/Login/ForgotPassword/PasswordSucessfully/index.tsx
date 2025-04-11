import cn from "classnames";
import styles from "./PasswordSucessfully.module.sass";
import Description from "../../Description";

type PasswordSucessfullyProps = {
    onLogin?: () => void;
};

const PasswordSucessfully = ({ onLogin }: PasswordSucessfullyProps) => {
    return (
        <Description
            title="Password Sucessfully Reset"
            info="Please check your email, and create your new password"
            sucessfully
        >
            <button
                className={cn("button-wide", styles.button)}
                onClick={onLogin}
            >
                Login now
            </button>
        </Description>
    );
};

export default PasswordSucessfully;
