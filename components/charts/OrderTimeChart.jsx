"use client";

import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip
} from "recharts";

const data = [
    { name: "Afternoon", value: 40, color: "#4f6cff" },
    { name: "Evening", value: 32, color: "#8b9dff" },
    { name: "Morning", value: 28, color: "#dbe0ff" }
];

// ✅ Custom Tooltip with white text
function CustomTooltip({ active, payload }) {
    if (active && payload && payload.length) {
        const { name, value, color } = payload[0].payload;

        return (
            <div
                style={{
                    background: "#37375C",
                    color: "#ffffff",
                    padding: "10px 14px",
                    borderRadius: "8px",
                    boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
                    fontSize: "12px",
                    minWidth: "130px"
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span
                        style={{
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            background: color
                        }}
                    />
                    <strong>{name}</strong>
                </div>

                <div style={{ marginTop: 6, color: "#e6e6f0" }}>
                    Value: <strong style={{ color: "#ffffff" }}>{value}%</strong>
                </div>
            </div>
        );
    }
    return null;
}

export default function OrderTimeChart() {
    return (
        <div style={{ width: "100%", height: "240px" }}>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="value"
                        innerRadius={70}
                        outerRadius={90}
                        paddingAngle={4}
                        isAnimationActive={true}
                    >
                        {data.map((entry, index) => (
                            <Cell key={index} fill={entry.color} />
                        ))}
                    </Pie>

                    {/* ✅ Hover tooltip */}
                    <Tooltip content={<CustomTooltip />} />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}
