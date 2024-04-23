import { BackgroundLabel } from "./BackgroundLabel"
import { Prizes } from "./Prizes"

export const PrizesPage = () => {
    return <div>
        <BackgroundLabel label={"Win Big"}>
          Prizes
      </BackgroundLabel>
        <div className="">
            <Prizes />
        </div>
    </div>
}