export default function RatingBubbles() {
    return (
        <div style={{ display: "flex", gap: 20 }}>
            <Bubble color="#ff9f43" value="85%" label="Food Taste" size={120} />
            <Bubble color="#4bcffa" value="92%" label="Packaging" size={90} />
            <Bubble color="#5f27cd" value="85%" label="Hygiene" size={70} />
        </div>
    );
}

function Bubble({ color, value, label, size }) {
    return (
        <div
            style={{
                width: size,
                height: size,
                borderRadius: "50%",
                background: color,
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 600,
            }}
        >
            <div>{value}</div>
            <small>{label}</small>
        </div>
    );
}
