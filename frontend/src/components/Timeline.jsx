import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const WorkIcon = () => <></>;

export const Timeline = () => {
  return (
    <div className="App">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(152,152,152, 0.2)", color: "#fff", borderRadius: '10px' }}
          date="2008 - 2010"
          dateClassName='text-white font-blod'
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(152,152,152, 0.2)", color: "#fff", borderRadius: '10px' }}
          date="2008 - 2010"
          dateClassName='text-white font-blod'
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(152,152,152, 0.2)", color: "#fff", borderRadius: '10px' }}
          date="2008 - 2010"
          dateClassName='text-white font-blod'
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(152,152,152, 0.2)", color: "#fff", borderRadius: '10px' }}
          date="2008 - 2010"
          dateClassName='text-white font-blod'
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(152,152,152, 0.2)", color: "#fff", borderRadius: '10px' }}
          date="2008 - 2010"
          dateClassName='text-white font-blod'
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
