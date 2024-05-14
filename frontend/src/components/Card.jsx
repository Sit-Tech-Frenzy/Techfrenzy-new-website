import { FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Card = ({ id, name, image, position, company, xLink, linkedInLink }) => {
    return (
        <div className="bg-gradient-to-br from-violet-300 to-purple-600 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-transform duration-200 ease-in-out p-2 md:p-4 lg:m-2 mx-4 my-2">
            <div className="flex flex-col items-center mb-4 mt-4">
                <img src={image} className=" h-64 object-cover rounded-lg mb-4" alt={name} />

                <h2 className="text-white text-2xl font-bold mb-2">{name}</h2>
                <p className="text-black font-semibold text-lg">{position}</p>
            </div>

            <hr className="border-t border-gray-700 mb-4" />

            <div className="flex items-center justify-center gap-4">
                {/* <a href={xLink} target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="text-white text-3xl" />
                </a> */}
                <a href={linkedInLink} target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn className="text-white text-3xl cursor-pointer" />
                </a>
            </div>
        </div>
    );
};

export default Card;