import styles from "./styles/Card.module.css";

export default function Card({ title, value, arrow , subtitle, para, width}) {
    return (
        <div className={styles.card} style={{ width }}>
            <p className={styles.title}>{title}</p>
            <h2 className={styles.value}>{value}</h2>
            <span
                className={
                    arrow === "" ? (styles.noArrow): (arrow === "up" ? styles.upArrow : styles.downArrow)
                }
            />
            <span className={arrow === "up" ? styles.upSubtitle : styles.downSubtitle}>{subtitle}</span>
            <p className={styles.para}>{para}</p>
        </div>
    );
}
