import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const WorkIcon = () => <></>;

export const Timeline = ({ data }) => {
  return (
    <div>
      <div className="App">
        <VerticalTimeline>
          {data.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(152,152,152, 0.2)", color: "#fff", borderRadius: '10px' }}
              date={item.date}
              dateClassName='text-white font-blod'
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
              <p>{item.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
      <div className='flex justify-center'>
        <div className="bg-white h-1 w-36 rounded"/>
      </div>    
    </div>
  );
}
