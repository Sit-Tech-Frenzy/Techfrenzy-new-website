import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

const Card = ({ id, name, image, position, company, xLink, linkedInLink }) => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-red-700 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-102 transition-all duration-500 ease-in-out cursor-pointer p-6">
      <img src={image} className="h-60 w-full object-cover rounded-lg mb-6" alt={name} />

      <h2 className="text-white text-2xl font-bold mb-2">{name}</h2>
      <p className="text-gray-500 font-semibold mb-2">{position}</p>
      <p className="text-gray-500 font-semibold mb-6">{company}</p>

      <hr className="border-t border-gray-700 mb-4" />

      <div className="flex items-center justify-center gap-6">
        <FaXTwitter className="text-white text-xl" />
        <FaLinkedinIn className="text-white text-xl" />
      </div>
    </div>
  );
};

export default Card;