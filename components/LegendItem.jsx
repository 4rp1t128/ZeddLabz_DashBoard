import styles from "./styles/LegendItem.module.css";

export default function LegendItem({ color, label }) {
    return (
        <div className={styles.legendItem}>
            <span
                className={styles.dot}
                style={{ backgroundColor: color }}
            />
            <span className={styles.text}>{label}</span>
        </div>
    );
}
