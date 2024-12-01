interface SpinnerOverlayProps {
    message?: string;
}

export const SpinnerOverlay: React.FC<SpinnerOverlayProps> = ({ message = "로딩 중입니다..." }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
            <div className="flex flex-col items-center">
                <div className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
                <p className="mt-4 text-lg font-semibold text-white animate-pulse">{message}</p>
            </div>
        </div>
    );
};
