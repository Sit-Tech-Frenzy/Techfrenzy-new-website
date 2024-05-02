import Testimonial from "./Testimonial";
import { testimonialData } from "../data";
import { BackgroundLabel } from "./BackgroundLabel";

const TestimonialPage = () => {
    return <div>
        <BackgroundLabel>
            Testimonial
        </BackgroundLabel>
        <div className="testimonials-container grid lg:grid-cols-4 grid-cols-1">
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
}

export default TestimonialPage;