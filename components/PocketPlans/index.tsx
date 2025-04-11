import cn from "classnames";
import styles from "./PocketPlans.module.sass";
import Card from "@/components/Card";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

type PlansType = {
    id: string;
    title: string;
    price: string;
    image: string;
};

type PocketPlansProps = {
    items: PlansType[];
    more?: boolean;
    row?: boolean;
};

const PocketPlans = ({ items, more, row }: PocketPlansProps) => (
    <Card
        title="My Pocket Plans"
        tooltip="Small description"
        onSeeMore={() => console.log("See more")}
    >
        <div className={cn(styles.list, { [styles.listRow]: row })}>
            {items.map((item) => (
                <div className={styles.item} key={item.id}>
                    <div className={styles.preview}>
                        <Image src={item.image} width={20} height={20} alt="" />
                    </div>
                    <div className={styles.title}>{item.title}</div>
                    <div className={styles.price}>{item.price}</div>
                </div>
            ))}
        </div>
        {more && (
            <div className={styles.foot}>
                <button className={styles.more}>
                    Load more <Icon name="arrow-thick-down" size="14" />
                </button>
            </div>
        )}
    </Card>
);

export default PocketPlans;
