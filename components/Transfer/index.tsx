import { useState } from "react";
import cn from "classnames";
import styles from "./Transfer.module.sass";
import Icon from "@/components/Icon";
import Modal from "@/components/Modal";
import Contacts from "@/components/Contacts";
import Select from "@/components/Select";
import Field from "@/components/Field";

import { contacts } from "@/mocks/contacts";

const cards = [
    {
        title: "Visa Card ( ****  ***** **** 3456 )",
        value: "3456",
    },
    {
        title: "Master Card ( ****  ***** **** 7878 )",
        value: "7878",
    },
    {
        title: "Visa Card ( ****  ***** **** 1204 )",
        value: "1204",
    },
];

type TransferProps = {
    className?: string;
};

const Transfer = ({ className }: TransferProps) => {
    const [visibleModal, setVisibleModal] = useState<boolean>(false);
    const [card, setCard] = useState<string>(cards[0].value);
    const [ammount, setAmmount] = useState<string>("");

    const handleChange = (value: string) => setCard(value);

    return (
        <>
            <button
                className={cn("button", className)}
                onClick={() => setVisibleModal(true)}
            >
                <Icon name="transfer" />
                <span>Transfer</span>
            </button>
            <Modal
                className={styles.modal}
                closeClassName={styles.close}
                visible={visibleModal}
                onClose={() => setVisibleModal(false)}
            >
                <div className={styles.title}>Send Money</div>
                <div className={styles.info}>
                    Please enter user information that you want to send money
                    and enter ammount
                </div>
                <Contacts
                    className={styles.contacts}
                    items={contacts}
                    slidesPerViewTablet={3}
                    slidesPerViewDesktop={3}
                    searchShow
                />
                <Select
                    className={styles.field}
                    classToggle={styles.toggleSelect}
                    label="Choose methode"
                    value={card}
                    onChange={handleChange}
                    options={cards}
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

export default Transfer;
