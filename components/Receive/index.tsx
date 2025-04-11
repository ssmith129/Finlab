import { useState } from "react";
import cn from "classnames";
import styles from "./Receive.module.sass";
import Icon from "@/components/Icon";
import Modal from "@/components/Modal";
import Contacts from "@/components/Contacts";
import Field from "@/components/Field";

import { contacts } from "@/mocks/contacts";

type ReceiveProps = {
    className?: string;
};

const Receive = ({ className }: ReceiveProps) => {
    const [visibleModal, setVisibleModal] = useState<boolean>(false);
    const [ammount, setAmmount] = useState<string>("");
    const [name, setName] = useState<string>("");

    return (
        <>
            <button
                className={cn("button", className)}
                onClick={() => setVisibleModal(true)}
            >
                <Icon name="receive" />
                <span>Receive</span>
            </button>
            <Modal
                className={styles.modal}
                closeClassName={styles.close}
                visible={visibleModal}
                onClose={() => setVisibleModal(false)}
            >
                <div className={styles.title}>Receive Money</div>
                <div className={styles.info}>
                    You can request multiple payment from up to 20 people
                </div>
                <Field
                    className={styles.field}
                    label="input id or contact name"
                    placeholder="Type id or name"
                    value={name}
                    onChange={(e: any) => setName(e.target.value)}
                    required
                />
                <Contacts
                    className={styles.contacts}
                    items={contacts}
                    slidesPerViewTablet={3}
                    slidesPerViewDesktop={3}
                    searchShow
                />
                <Field
                    className={styles.field}
                    label="Enter ammount"
                    placeholder="Type ammount"
                    iconBefore="dollar-circle"
                    value={ammount}
                    onChange={(e: any) => setAmmount(e.target.value)}
                    required
                />
                <button className={cn("button-wide", styles.button)}>
                    Confirm
                </button>
            </Modal>
        </>
    );
};

export default Receive;
