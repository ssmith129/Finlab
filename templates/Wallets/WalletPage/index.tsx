import { useState } from "react";
import cn from "classnames";
import styles from "./WalletPage.module.sass";
import Layout from "@/components/Layout";
import Card from "@/components/Card";
import Field from "@/components/Field";
import DatePicker from "@/components/DatePicker";
import Select from "@/components/Select";
import CreditCard from "@/components/CreditCard";

import { creditCards } from "@/mocks/creditCards";

const breadcrumbs = [
    {
        title: "Wallets",
        url: "/wallets",
    },
    {
        title: "Card details",
    },
];

const countries = [
    {
        title: "Indonesia",
        value: "indonesia",
    },
    {
        title: "Ukraine",
        value: "ukraine",
    },
    {
        title: "USA",
        value: "usa",
    },
];

const states = [
    {
        title: "VIC",
        value: "vic",
    },
    {
        title: "VIC 2",
        value: "vic 2",
    },
];

const cities = [
    {
        title: "Semarang",
        value: "semarang",
    },
    {
        title: "New-York",
        value: "new-york",
    },
    {
        title: "Oslo",
        value: "oslo",
    },
];

type WalletPageProps = {
    id: any;
};

const WalletPage = ({ id }: WalletPageProps) => {
    const creditCard = creditCards.find((card) => card.id === id);

    const [name, setName] = useState<string>("Rainer Yaeger");
    const [email, setEmail] = useState<string>("RainerYaeger@gmail.com");
    const [cardNumber, setCardNumber] = useState<string>(
        "1234 - 4325 - 5467 - 3456"
    );
    const [startDate, setStartDate] = useState<any>(new Date());
    const [code, setCode] = useState<string>("773");
    const [country, setCountry] = useState<string>(countries[0].value);
    const [nameState, setNameState] = useState<string>(states[0].value);
    const [city, setCity] = useState<string>(cities[0].value);

    const handleChangeCountry = (value: string) => setCountry(value);
    const handleChangeNameState = (value: string) => setNameState(value);
    const handleChangeCity = (value: string) => setCity(value);

    return (
        <Layout title="Wallets" breadcrumbs={breadcrumbs}>
            <div className={styles.row}>
                <div className={styles.col}>
                    <Card title="Card Details" tooltip="Small description">
                        <form
                            className={styles.form}
                            action=""
                            onSubmit={() => console.log("Submit")}
                        >
                            <Field
                                className={styles.field}
                                label="Name on Card"
                                placeholder="Type Name on Card"
                                value={name}
                                onChange={(e: any) => setName(e.target.value)}
                                required
                            />
                            <Field
                                className={styles.field}
                                type="email"
                                label="Email Address"
                                placeholder="Type Email Address"
                                value={email}
                                onChange={(e: any) => setEmail(e.target.value)}
                                required
                            />
                            <Field
                                className={styles.field}
                                label="Card Number"
                                placeholder="Type Card Number"
                                value={cardNumber}
                                onChange={(e: any) =>
                                    setCardNumber(e.target.value)
                                }
                                required
                            />
                            <div className={styles.line}>
                                <DatePicker
                                    className={styles.field}
                                    label="Expiry"
                                    selected={startDate}
                                    onChange={(date: any) => setStartDate(date)}
                                    dateFormat="MM/yyyy"
                                />
                                <Field
                                    className={styles.field}
                                    label="CVV"
                                    type="password"
                                    placeholder="Type CVV"
                                    value={code}
                                    onChange={(e: any) =>
                                        setCode(e.target.value)
                                    }
                                    required
                                    hideValue
                                />
                            </div>
                            <Select
                                className={styles.field}
                                label="Country"
                                value={country}
                                onChange={handleChangeCountry}
                                options={countries}
                            />
                            <div className={styles.line}>
                                <Select
                                    className={styles.field}
                                    label="State"
                                    value={nameState}
                                    onChange={handleChangeNameState}
                                    options={states}
                                    dropdownUp
                                />
                                <Select
                                    className={styles.field}
                                    label="City"
                                    value={city}
                                    onChange={handleChangeCity}
                                    options={cities}
                                    dropdownUp
                                />
                            </div>
                            <div className={styles.btns}>
                                <button
                                    className={cn(
                                        "button-stroke",
                                        styles.button
                                    )}
                                >
                                    Cancel
                                </button>
                                <button className={cn("button", styles.button)}>
                                    Yes
                                </button>
                            </div>
                        </form>
                    </Card>
                </div>
                <div className={styles.col}>
                    <Card title="Card Design" tooltip="Small description">
                        <CreditCard
                            className={styles.creditCard}
                            item={creditCard}
                        />
                        <div className={styles.control}>
                            <button
                                className={cn(
                                    "button-stroke button-wide",
                                    styles.button
                                )}
                            >
                                Change Card Design
                            </button>
                        </div>
                    </Card>
                </div>
            </div>
        </Layout>
    );
};

export default WalletPage;
