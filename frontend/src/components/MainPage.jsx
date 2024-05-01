import Card from "./Card";
import Testimonial from "./Testimonial";
import { mentorData, testimonialData } from "../data";
import { BackgroundLabel } from "./BackgroundLabel";

const MainPage = () => {
  return (
    <div className="main-page">
      <BackgroundLabel>
        Our Team
      </BackgroundLabel>

      <div className="cards-container grid lg:grid-cols-6 grid-cols-1">
        {mentorData.map((mentor) => (
          <Card
            id={mentor.id}
            key={mentor.id}
            name={mentor.name}
            image={mentor.image}
            position={mentor.position}
            company={mentor.company}
            xLink={mentor.xLink}
            linkedInLink={mentor.linkedInLink}
          />
        ))}
      </div>

      <h2 className="main-h2">Testimonials</h2>

      <div className="testimonials-container">
        {testimonialData.map((testimonial) => (
          <Testimonial
            id={testimonial.id}
            key={testimonial.id}
            name={testimonial.name}
            content={testimonial.content}
          />
        ))}
      </div>
    </div>
  );
};

export default MainPage;