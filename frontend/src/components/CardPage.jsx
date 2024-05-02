import Card from "./Card";
import { mentorData } from "../data";
import { BackgroundLabel } from "./BackgroundLabel";

const CardPage = () => {
    return (
        <div>
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
        </div>
    );
}

export default CardPage;