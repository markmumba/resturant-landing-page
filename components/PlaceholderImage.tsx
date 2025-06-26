interface PlaceholderImageProps {
    width: number;
    height: number;
    text: string;
    bgColor?: string;
    textColor?: string;
}

export default function PlaceholderImage({
    width,
    height,
    text,
    bgColor = "bg-gradient-to-br from-amber-400 to-red-500",
    textColor = "text-white"
}: PlaceholderImageProps) {
    return (
        <div
            className={`${bgColor} ${textColor} flex items-center justify-center rounded-lg font-semibold text-center p-4`}
            style={{ width: `${width}px`, height: `${height}px` }}
        >
            <div>
                <div className="text-2xl mb-2">📸</div>
                <div className="text-sm">{text}</div>
            </div>
        </div>
    );
} 