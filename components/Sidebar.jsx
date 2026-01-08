import Image from "next/image";
import {
    LayoutDashboard,
    ShoppingBag,
    Utensils,
    Star,
    Settings,
    CreditCard,
    User,
    HelpCircle,
} from "lucide-react";
import styles from "./styles/Sidebar.module.css";

export default function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            {/* Logo */}
            <div className={styles.logoWrapper}>
                <Image
                    src="/Logo.png"
                    alt="Good Food"
                    width={32}
                    height={32}
                />
                <h2 className={styles.logo}>GOODFOOD</h2>
            </div>

            <nav>
                <p className={styles.section}>MENU</p>
                <ul className={styles.menu}>
                    <li className={styles.menuItem}>
                        <LayoutDashboard size={18} />
                        Dashboard
                    </li>
                    <li className={styles.menuItem}>
                        <ShoppingBag size={18} />
                        Food Order
                    </li>
                    <li className={styles.menuItem}>
                        <Utensils size={18} />
                        Manage Menu
                    </li>
                    <li className={styles.menuItem}>
                        <Star size={18} />
                        Customer Review
                    </li>
                </ul>

                <p className={styles.section}>OTHERS</p>
                <ul className={styles.menu}>
                    <li className={styles.menuItem}>
                        <Settings size={18} />
                        Settings
                    </li>
                    <li className={styles.menuItem}>
                        <CreditCard size={18} />
                        Payment
                    </li>
                    <li className={styles.menuItem}>
                        <User size={18} />
                        Accounts
                    </li>
                    <li className={styles.menuItem}>
                        <HelpCircle size={18} />
                        Help
                    </li>
                </ul>
            </nav>
        </aside>
    );
}