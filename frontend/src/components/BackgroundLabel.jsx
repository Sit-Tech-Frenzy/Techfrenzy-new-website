export const BackgroundLabel = ({ label, children }) => {
    return (
        <div>
            <div className="relative flex justify-center items-center h-full py-36">
                <div className="absolute inset-0 z-0 flex justify-center items-center">
                    <div className="font-extrabold text-8xl lg:text-9xl text-gray-500/60">
                        <div className="bg-orange-800 h-1 w-full flex justify-center rounded" />
                        {label}
                        <div className="bg-orange-800 h-1 w-34 flex justify-center rounded" />
                    </div>
                </div>
                <div className="relative z-1 text-white text-6xl font-bold">
                    {children}
                </div>
            </div>
        </div>
    );
};
