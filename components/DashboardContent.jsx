import RevenueChart from "./charts/RevenueChart";
import OrderTimeChart from "./charts/OrderTimeChart";
import OrderLineChart from "./charts/OrderLineChart";
import Card from "./Card.jsx";
import styles from "./styles/Dashboard.module.css";
import CircularProgress from "./charts/CircularProgress";
import FoodItemCard from "./FoodItemCard";
import LegendItem from "./LegendItem";

export default function DashboardContent() {
    return (
        <main className={styles.dashboard}>
            <h1 className={styles.title}>Dashboard</h1>

            <div className={styles.grid}>
                <div className={`${styles.card} ${styles.revenue}`}>
                    <Card title="Revenue" value="IDR 7.852.000" arrow="up" subtitle="2.1% last week" width="600px" />
                    <RevenueChart />
                    <div style={{ display: "flex", gap: "40px", marginBottom: "12px" }}>
                        <LegendItem color="#5A6ACF" label="Last 6 days" />
                        <LegendItem color="#D8D9DB" label="Last Week" />
                    </div>
                </div>

                <div className={`${styles.card} ${styles.orderTime}`}>
                    <Card title="Order Time" arrow="" para="From 1-6 Dec, 2020" width="300px" />
                    <OrderTimeChart />
                    <div style={{ display: "flex", gap: "28px", marginBottom: "12px" }}>
                        <LegendItem color="#5A6ACF" label="Afternoon" />
                        <LegendItem color="#8593ED" label="Evening" />
                        <LegendItem color="#C7CEFF" label="Morning" />

                    </div>
                </div>

                <div className={`${styles.card} ${styles.rating}`}>
                    <Card title="Your Rating" para="Lorem ipsum dolor sit amet, consectetur" arrow="" width="362px" />
                    <div
                        style={{
                            position: "relative",
                            width: 320,
                            height: 260,
                        }}
                    >
                        {/* Hygiene */}
                        <div
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 40,
                                zIndex: 1,
                            }}
                        >
                            <CircularProgress
                                percentage={85}
                                innerRadius={45}
                                color="#6C6AE3"
                                label="Hygiene"
                            />
                        </div>

                        {/* Packaging */}
                        <div
                            style={{
                                position: "absolute",
                                top: 110,
                                left: 0,
                                zIndex: 0,
                            }}
                        >
                            <CircularProgress
                                percentage={92}
                                innerRadius={48}
                                color="#26C6DA"
                                label="Packaging"
                            />
                        </div>

                        {/* Food Taste (Top / Main) */}
                        <div
                            style={{
                                position: "absolute",
                                top: 40,
                                left: 120,
                                zIndex: 2,
                            }}
                        >
                            <CircularProgress
                                percentage={85}
                                innerRadius={60}
                                color="#FFA63D"
                                label="Food Taste"
                            />
                        </div>
                    </div>
                </div>
                <div className={`${styles.card} ${styles.mostOrderFood}`}>
                    <Card title="Most Ordered Food" arrow="" para="Adipiscing elit, sed do eiusmod tempor" width="300px" />
                    <FoodItemCard photo="/Group 297.png" title="Fresh Salad Bowl" price="IDR 45.000" />
                    <FoodItemCard photo="/Group 298.png" title="Chicken Noodles" price="IDR 75.000" />
                    <FoodItemCard photo="/Group 24.png" title="Smoothie Fruits" price="IDR 45.000" />
                    <FoodItemCard photo="/Group 23.png" title="Hot Chicken Wings" price="IDR 45.000" />
                </div>
                <div className={`${styles.card} ${styles.order}`}>
                    <Card title="Orders" value="2.568" arrow="down" subtitle="2.1% last week" para="Sales from 1-6 Dec, 2020" width="320px" />
                    <OrderLineChart />
                    <div style={{ display: "flex", gap: "20px", marginBottom: "12px" }}>
                        <LegendItem color="#5A6ACF" label="Last 6 days" />
                        <LegendItem color="#D8D9DB" label="Last Week" />
                    </div>
                </div>
            </div>
        </main>
    );
}

