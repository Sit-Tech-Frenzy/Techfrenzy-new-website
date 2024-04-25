export const BackgroundLabel = ({ label, children }) => {
    return (
        <div>
            <div className="flex justify-center items-center h-full py-36">
                <div className="text-white lg:text-9xl text-7xl font-bold">
                    <div className="bg-orange-800 h-1 w-full flex justify-center rounded" />
                    {children}
                    <div className="bg-orange-800 h-1 w-34 flex justify-center rounded" />
                </div>
            </div>
        </div>
    );
};
