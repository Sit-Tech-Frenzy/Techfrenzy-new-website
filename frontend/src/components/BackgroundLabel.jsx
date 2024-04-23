export const BackgroundLabel = ({label, children}) => {
    return (
        <div className="relative flex justify-center items-center h-full py-10  ">
            <div className="absolute inset-0 z-0 flex justify-center items-center">
                <div className="font-extrabold text-9xl text-gray-500/60">
                    {label}
                </div>
            </div>
            <div className="relative z-1 text-white text-6xl font-bold">
                {children}
            </div>
        </div>
    )
}