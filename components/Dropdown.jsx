import styles from "./styles/Dropdown.module.css";

export default function Dropdown() {
    return (
        <div className={styles.container}>
            {/* Left: Burger Icon */}
            <span className={styles.icon}>🍔</span>

            {/* Middle: Name */}
            <span className={styles.name}>Delicious Burger</span>

            {/* Dropdown Arrow */}
            <span className={styles.arrow}>⌄</span>

            {/* Notification */}
            <div className={styles.notification}>
                <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#B0C3CC"
                    strokeWidth="1.5"
                >
                    <path d="M18 8a6 6 0 10-12 0c0 7-3 7-3 7h18s-3 0-3-7" />
                    <path d="M13.73 21a2 2 0 01-3.46 0" />
                </svg>
                <span className={styles.badge} />
            </div>
        </div>
    );
}
