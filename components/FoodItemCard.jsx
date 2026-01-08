import Image from "next/image";
import styles from "./styles/FoodItemCard.module.css";

export default function FoodItemCard({ photo, title, price }) {
    return (
        <div className={styles.card}>
            <div className={styles.left}>
                <Image
                    src={photo}
                    alt={title}
                    width={28}
                    height={28}
                    className={styles.image}
                />
                <span className={styles.title}>{title}</span>
            </div>

            <span className={styles.price}>{price}</span>
        </div>
    );
}
