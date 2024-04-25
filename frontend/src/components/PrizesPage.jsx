import { BackgroundLabel } from "./BackgroundLabel";
import { PrizeComponent } from "./Prizes";

export const PrizesPage = () => {
    return (
        <div>
            <BackgroundLabel>
                Prizes
            </BackgroundLabel>
            <div className="">
                <PrizeComponent />
            </div>
        </div>
    );
};