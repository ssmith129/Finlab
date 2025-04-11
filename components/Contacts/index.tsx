import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import cn from "classnames";
import styles from "./Contacts.module.sass";
import Icon from "@/components/Icon";
import Image from "@/components/Image";

import { Navigation } from "swiper";
import "swiper/css/navigation";

type ContactsType = {
    id: string;
    title: string;
    avatar: string;
    login: string;
};

type ContactsProps = {
    className?: string;
    items: ContactsType[];
    slidesPerViewTablet: number;
    slidesPerViewDesktop: number;
    searchShow?: boolean;
};

const Contacts = ({
    className,
    items,
    slidesPerViewTablet,
    slidesPerViewDesktop,
    searchShow,
}: ContactsProps) => {
    const [search, setSearch] = useState<string>("");

    return (
        <div className={cn(styles.contacts, className)}>
            {searchShow && (
                <form
                    className={styles.search}
                    action=""
                    onSubmit={() => console.log("Submit")}
                >
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Recent Contact"
                        value={search}
                        onChange={(e: any) => setSearch(e.target.value)}
                    />
                    <button className={styles.button}>
                        <Icon name="search" size="18" />
                    </button>
                </form>
            )}
            <div className={styles.list}>
                <Swiper
                    navigation={true}
                    loop={true}
                    modules={[Navigation]}
                    className="contact-swiper"
                    watchSlidesProgress={true}
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: slidesPerViewTablet,
                        },
                        1420: {
                            slidesPerView: slidesPerViewDesktop,
                        },
                    }}
                >
                    {items.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className={styles.item}>
                                <div className={styles.avatar}>
                                    <Image
                                        src={item.avatar}
                                        style={{ objectFit: "cover" }}
                                        fill
                                        alt="Avatar"
                                    />
                                </div>
                                <div className={styles.title}>{item.title}</div>
                                <div className={styles.login}>
                                    @{item.login}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Contacts;
