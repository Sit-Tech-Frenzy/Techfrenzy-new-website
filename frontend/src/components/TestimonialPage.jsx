import Testimonial from "./Testimonial";
import { testimonialData } from "../data";

const TestimonialPage = () => {
    return <div>
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
}

export default TestimonialPage;