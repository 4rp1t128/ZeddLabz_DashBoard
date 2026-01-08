"use client";
import { useState } from "react";
import SearchBar from "./SearchBar";
import styles from "./styles/Header.module.css";
import Dropdown from "./Dropdown";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className={styles.header}>
            {/* Center */}
            <SearchBar />

            {/* Right */}
            <div className={styles.right}>
                

                {/* Dropdown */}
                {/* <div
                    className={styles.dropdown}
                    onClick={() => setOpen(!open)}
                >
                    <span className={styles.userName}>Delicious Burger</span>
                    <span className={styles.arrow}>⌄</span>

                    {open && (
                        <div className={styles.menu}>
                            <div>Profile</div>
                            <div>Settings</div>
                            <div className={styles.logout}>Logout</div>
                        </div>
                    )}
                </div> */}
                <Dropdown />
            </div>
        </header>
    );
}
