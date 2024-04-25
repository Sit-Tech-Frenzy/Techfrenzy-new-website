import { BackgroundLabel } from "./BackgroundLabel";
import { Timeline } from "./Timeline";

export const TimelinePage = () => {
  const timelineData = [
    {
      id: 1,
      date: "2022-01-01",
      title: "Event 1",
      description: "Description of Event 1",
    },
    {
      id: 2,
      date: "2022-02-01",
      title: "Event 2",
      description: "Description of Event 2",
    },
    {
      id: 3,
      date: "2022-03-01",
      title: "Event 3",
      description: "Description of Event 3",
    },
  ];

  return (
    <div>
      <BackgroundLabel>
        <div>
          Time Line
        </div>
      </BackgroundLabel>
      <div className="pb-24">
        <Timeline data={timelineData}/>
      </div>
    </div>
  );
};