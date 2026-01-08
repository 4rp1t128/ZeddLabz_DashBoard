const CircularProgress = ({
    percentage = 85,
    innerRadius = 60,
    gap = 5,
    arcStroke = 2.11,
    color = "#FFA63D",
    label = "Food Taste",
    ...style // padding/margin safe now
}) => {
    /**
     * Geometry
     */
    const rx = innerRadius + gap + arcStroke / 2;
    const ry = rx;

    const size = (rx + arcStroke) * 2;
    const center = size / 2;

    /**
     * Ellipse circumference (Ramanujan approximation)
     */
    const circumference =
        Math.PI *
        (3 * (rx + ry) -
            Math.sqrt((3 * rx + ry) * (rx + 3 * ry)));

    const dashOffset =
        circumference - (percentage / 100) * circumference;

    return (
        /* OUTER WRAPPER — padding/margin goes here */
        <div style={style}>
            {/* INNER CONTAINER — NEVER add padding here */}
            <div
                style={{
                    width: size,
                    height: size,
                    position: "relative",
                }}
            >
                <svg width={size} height={size}>
                    {/* Background Ellipse */}
                    <ellipse
                        cx={center}
                        cy={center}
                        rx={rx}
                        ry={ry}
                        fill="none"
                        stroke={color}
                        strokeWidth={arcStroke}
                        opacity={0.4}
                    />

                    {/* Progress Ellipse Arc */}
                    <ellipse
                        cx={center}
                        cy={center}
                        rx={rx}
                        ry={ry}
                        fill="none"
                        stroke={color}
                        strokeWidth={arcStroke}
                        strokeDasharray={circumference}
                        strokeDashoffset={dashOffset}
                        strokeLinecap="round"
                        transform={`rotate(-90 ${center} ${center})`}
                    />

                    {/* Inner Filled Circle */}
                    <circle
                        cx={center}
                        cy={center}
                        r={innerRadius}
                        fill={color}
                    />
                </svg>

                {/* Center Text — ALWAYS centered */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        pointerEvents: "none",
                        textAlign: "center",
                    }}
                >
                    <div
                        style={{
                            fontSize: "21px",
                            fontWeight: 400,
                            lineHeight: 1,
                        }}
                    >
                        {percentage}%
                    </div>
                    <div
                        style={{
                            fontSize: "13px",
                            opacity: 0.95,
                            marginTop: "4px",
                        }}
                    >
                        {label}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CircularProgress;
