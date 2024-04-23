import { BackgroundLabel } from "./BackgroundLabel"
import { Timeline } from "./Timeline"

export const TimelinePage = () => {
    return <div>
        <BackgroundLabel label={"EVENTS"}>
        <div>
          Time line
        </div>
      </BackgroundLabel>
      <div className=" py-36">
        <Timeline />
      </div>
    </div>
}