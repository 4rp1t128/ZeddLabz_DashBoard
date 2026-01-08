"use client";
import { useState } from "react";
import styles from "./styles/Search.module.css";

export default function SearchBar() {
    const [query, setQuery] = useState("");

    return (
        <div className={styles.searchWrapper}>
            <input
                className={styles.search}
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            <span className={styles.searchIcon}>
                <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#627B87"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.5"
                >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
            </span>
        </div>
    );
}
