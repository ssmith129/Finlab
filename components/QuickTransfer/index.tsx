import { useState } from "react";
import cn from "classnames";
import styles from "./QuickTransfer.module.sass";
import Card from "@/components/Card";
import Contacts from "@/components/Contacts";
import Field from "@/components/Field";
import Icon from "@/components/Icon";

type QuickTransferProps = {
    contacts: any;
};

const QuickTransfer = ({ contacts }: QuickTransferProps) => {
    const [ammount, setAmmount] = useState<string>("");

    return (
        <Card title="Quick Transfer" tooltip="Small description">
            <Contacts
                className={styles.contacts}
                items={contacts}
                slidesPerViewTablet={3}
                slidesPerViewDesktop={4}
            />
            <form
                className={styles.form}
                action=""
                onSubmit={() => console.log("Form submit")}
            >
                <Field
                    className={styles.field}
                    placeholder="Type input ammount"
                    iconBefore="dollar-circle"
                    value={ammount}
                    onChange={(e: any) => setAmmount(e.target.value)}
                    required
                />
                <button className={cn("button", styles.button)}>
                    <span>Send</span>
                    <Icon name="send" />
                </button>
            </form>
        </Card>
    );
};

export default QuickTransfer;
