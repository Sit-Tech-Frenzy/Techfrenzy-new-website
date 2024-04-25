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
      date: "Day 1: 10:00 AM - 10:30 AM",
      title: "Energize Your Brain",
      description: "Start your day with an inspirational keynote or a quick icebreaker session to getyour creative juices flowing. Meet your fellow hackers and form connections that will last beyond the event.",
    },
    {
      id: 4,
      date: "11:00 AM - 1:15 PM",
      title: "Hackathon Kickoff",
      description: "The hacking officially begins! Dive into your projects, collaborate with your team, and start building your masterpiece. Remember, this is where your journey toinnovation takes off.",
    },
    {
      id: 5,
      date: "1:20 PM - 2:20 PM",
      title: "Recharge and Refuel",
      description: `It's lunchtime! Enjoy a delicious meal and take a well-deserved break. Use this
      time to socialize, share ideas, and recharge for the exciting journey ahead.`,
    },
    {
      id: 6,
      date: "2:30 PM - 4:45 PM",
      title: "Uninterrupted Hacking",
      description: `Back to your projects! Focus on coding, designing, and refining your ideas. Our
      mentors will be available online to assist you, so don't hesitate to reach out if you
      need guidance.`,
    },
    {
      id: 7,
      date: "5:00 PM - 7:00 PM",
      title: "Journey Back Home",
      description: `Time to head home. We understand the importance of work-life balance. Take
      this break to relax, grab dinner, and spend quality time with your loved ones.`,
    },
    {
      id: 8,
      date: "7:00 PM Onwards",
      title: "Hack from Home",
      description: `Continue your hackathon journey right from the comfort of your home. Whether
      you prefer your cozy couch or a dedicated home office, make yourself
      comfortable and keep those commits coming!`,
    },
    {
      id: 9,
      date: "Day 2: 10:00 AM - 11:00 AM",
      title: "Rise and Shine",
      description: `Return to campus, ready to tackle the final stretch of your project. Today is all
      about putting the finishing touches on your masterpiece.`,
    },
    {
      id: 10,
      date: "11:00 AM",
      title: "Deadline Looms!",
      description: `Your project submission deadline is approaching rapidly! Ensure that you've
      covered all aspects, from code to documentation.`,
    },
    {
      id: 11,
      date: "11:00 AM - 11:30 PM",
      title: "Video And PPT Creation",
      description: `Prepare your PPT, rehearse your pitch, and make sure you're ready to be
      impressed by your awesome video.`,
    },
    {
      id: 12,
      date: "11:30 AM - 11:45 AM",
      title: "Final Checks",
      description: `Double-check your project ZIP file, video, and any other submission materials.
      Ensure everything is in order.`,
    },
    {
      id: 13,
      date: "12:00 PM",
      title: "Submissions Close",
      description: `Submit your project ZIP file, PPT & Video.`,
    },
    {
      id: 14,
      date: "12:00 PM - 4:00 PM",
      title: "Final Evaluation",
      description: `All projects will undergo thorough evaluation by the judges, based on their
      functionality, innovation, presentation, etc. according to the requirements.`,
    },
    {
      id: 15,
      date: "4:00 PM",
      title: "Winners Announced",
      description: `Stay tuned as we announce the winners and showcase the incredible projects
      that came to life during this hackathon.`,
    },
    {
      id: 16,
      date: "4:00 PM - 5:00 PM",
      title: "Post-Event Networking and Prize Distribution",
      description: `Connect with fellow hackers, mentors, and sponsors during this informal
      networking session. Share feedback and exchange contact information for future
      collaborations.`,
    },
  ];

  return (
    <div>
      <BackgroundLabel>
        <div>
          Time Line
        </div>
      </BackgroundLabel>
      <div className="pb-10 lg:pb-24">
        <Timeline data={timelineData}/>
      </div>
    </div>
  );
};