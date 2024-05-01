import { FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Card = ({ id, name, image, position, company, xLink, linkedInLink }) => {
    return (
        <div className="bg-gradient-to-br from-gray-900 to-red-700 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-102 transition-all duration-500 ease-in-out cursor-pointer p-6 lg:m-2 mx-4 my-2">
            <div className="flex flex-col items-center">
                <img src={image} className=" h-48 w-48 object-cover rounded-lg" alt={name} />

                <h2 className="text-white text-xl font-bold mb-2">{name}</h2>
                <p className="text-gray-500 font-semibold mb-2">{position}</p>
                <p className="text-gray-500 font-semibold mb-4">{company}</p>
            </div>

            <hr className="border-t border-gray-700 mb-4" />

            <div className="flex items-center justify-center gap-4">
                <FaTwitter className="text-white text-2xl" />
                <FaLinkedinIn className="text-white text-2xl" />
            </div>
        </div>
    );
};

export default Card;