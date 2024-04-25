export const BackgroundLabel = ({ label, children }) => {
    return (
        <div>
            <div className="flex justify-center items-center h-full lg:py-36 py-28">
                <div className="text-white lg:text-9xl text-7xl font-bold">
                    <div className="bg-orange-800 h-1 w-full flex justify-center rounded" />
                    {children}
                    <div className="bg-orange-800 h-1 w-34 flex justify-center rounded" />
                </div>
            </div>
        </div>
    );
};
