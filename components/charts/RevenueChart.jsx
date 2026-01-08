"use client";
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";

const data = [
    { day: "01", last: 40, prev: 30 },
    { day: "02", last: 50, prev: 35 },
    { day: "03", last: 45, prev: 40 },
    { day: "04", last: 60, prev: 45 },
    { day: "05", last: 55, prev: 50 },
];

export default function RevenueChart() {
    return (
        <ResponsiveContainer width="100%" height={220}>
            <BarChart data={data} barGap={6}>
                <CartesianGrid stroke="#eee" vertical={false} />
                <XAxis dataKey="day" axisLine={false} tickLine={false} />
                <YAxis hide />
                <Tooltip />

                <Bar
                    dataKey="last"
                    fill="#4f6cff"
                    radius={[8, 8, 0, 0]}
                    barSize={10}
                />
                <Bar
                    dataKey="prev"
                    fill="#e4e7ff"
                    radius={[8, 8, 0, 0]}
                    barSize={10}
                />
            </BarChart>
        </ResponsiveContainer>
    );
}
