import Link from "next/link";
import styles from "./CardLists.module.sass";
import Card from "@/components/Card";
import CreditCard from "@/components/CreditCard";
import AddNewCard from "@/components/AddNewCard";

type CardListsType = {
    id: string;
    title: string;
    type: string;
    number: string;
    name: string;
    date: string;
    color: string;
};

type CardListsProps = {
    items: CardListsType[];
};

const CardLists = ({ items }: CardListsProps) => (
    <Card title="Card Lists" tooltip="Small description">
        <div className={styles.list}>
            {items.map((card) => (
                <Link
                    className={styles.creditCard}
                    key={card.id}
                    href={`/wallets/${card.id}`}
                >
                    <CreditCard item={card} />
                </Link>
            ))}
        </div>
        <AddNewCard />
    </Card>
);

export default CardLists;
