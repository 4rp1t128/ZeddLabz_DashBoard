"use client";
import { useEffect, useRef } from "react";

const WIDTH = 312;
const HEIGHT = 142;

const OrderLineChart = ({
    data1 = [20, 45, 35, 60, 55, 80, 70],
    data2 = [15, 30, 50, 40, 65, 60, 85],
    color1 = "#5A6ACF",
    color2 = "#E6E8EC",
}) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        ctx.clearRect(0, 0, WIDTH, HEIGHT);

        const padding = {
            top: 10,
            bottom: 24,
            left: 10,
            right: 10,
        };

        const chartWidth = WIDTH - padding.left - padding.right;
        const chartHeight = HEIGHT - padding.top - padding.bottom;

        const maxValue = Math.max(...data1, ...data2);
        const minValue = 0;

        const mapPoints = (data) =>
            data.map((value, index) => {
                const x =
                    padding.left +
                    (index / (data.length - 1)) * chartWidth;

                const y =
                    padding.top +
                    chartHeight -
                    ((value - minValue) / (maxValue - minValue)) *
                    chartHeight;

                return { x, y };
            });

        const drawLine = (points, color) => {
            ctx.beginPath();
            ctx.moveTo(points[0].x, points[0].y);

            points.forEach((p, i) => {
                if (i !== 0) ctx.lineTo(p.x, p.y);
            });

            ctx.strokeStyle = color;
            ctx.lineWidth = 2;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            ctx.stroke();

            // draw points
            points.forEach(({ x, y }) => {
                ctx.beginPath();
                ctx.arc(x, y, 3, 0, Math.PI * 2);
                ctx.fillStyle = color;
                ctx.fill();
            });
        };

        drawLine(mapPoints(data1), color1);
        drawLine(mapPoints(data2), color2);

        // ✅ X-axis labels
        const xLabels = [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
        ];

        ctx.fillStyle = "#9CA3AF";
        ctx.font = "10px Inter, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "top";

        xLabels.forEach((label, index) => {
            const x =
                padding.left +
                (index / (xLabels.length - 1)) * chartWidth;

            const y = HEIGHT - padding.bottom + 6;

            ctx.fillText(label, x, y);
        });
    }, [data1, data2, color1, color2]);

    return (
        <div
            style={{
                position: "relative",
                width: WIDTH,
                height: HEIGHT,
            }}
        >
            {/* Background Grid */}
            <svg
                width={WIDTH}
                height={HEIGHT}
                viewBox="0 0 312 142"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M0 0.5H312" stroke="#E2E7E7" strokeDasharray="3 6" />
                <path d="M0 40.5H312" stroke="#E2E7E7" strokeDasharray="3 6" />
                <path d="M0 80.5H312" stroke="#E2E7E7" strokeDasharray="3 6" />
                <path d="M0 120.5H312" stroke="#E2E7E7" />
            </svg>

            {/* Canvas Overlay */}
            <canvas
                ref={canvasRef}
                width={WIDTH}
                height={HEIGHT}
                style={{
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                }}
            />
        </div>
    );
};

export default OrderLineChart;
