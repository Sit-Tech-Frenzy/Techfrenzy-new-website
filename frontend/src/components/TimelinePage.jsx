import { BackgroundLabel } from "./BackgroundLabel";
import { Timeline } from "./Timeline";

export const TimelinePage = () => {
  return (
    <div>
      <BackgroundLabel label={"EVENTS"}>
        <div>
          Time Line
        </div>
      </BackgroundLabel>
      <div className="pb-24">
        <Timeline />
      </div>
    </div>
  );
};