import Link from "next/link";
import cn from "classnames";
import styles from "./Logo.module.sass";
import Image from "@/components/Image";

type LogoProps = {
    className?: string;
    small?: boolean;
};

const Logo = ({ className, small }: LogoProps) => (
    <Link
        className={cn(styles.logo, className, { [styles.small]: small })}
        href="/"
    >
        <Image
            src="/images/logo.svg"
            width={128}
            height={38}
            style={{
                width: "100%",
                height: "auto",
            }}
            alt="Logo"
        />
    </Link>
);

export default Logo;
