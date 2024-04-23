import { BackgroundLabel } from "./BackgroundLabel"
import { Timeline } from "./Timeline"

export const TimelinePage = () => {
    return <div>
        <BackgroundLabel label={"EVENTS"}>
        <div>
          Time Line
        </div>
      </BackgroundLabel>
      <div className=" py-20">
        <Timeline />
      </div>
    </div>
}