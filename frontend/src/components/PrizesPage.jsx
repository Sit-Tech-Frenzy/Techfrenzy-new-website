import { BackgroundLabel } from "./BackgroundLabel";
import { PrizeComponent } from "./Prizes";

export const PrizesPage = () => {
    return (
        <div>
            <BackgroundLabel label={"Win Big"}>
                Prizes
            </BackgroundLabel>
            <div className="">
                <PrizeComponent />
            </div>
        </div>
    );
};