const Testimonial = ({ content, name }) => {
  return (
    <div className="testimonial bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg p-2 shadow-md hover:shadow-lg lg:m-3 m-4 flex flex-col justify-between">
      <div className="px-6">
        <div className="testimonial-content">
          <p className="text-gray-600 pt-4 font-medium">
            <span className="text-2xl text-red-800 font-semibold">“</span>
            {content}
            <span className="text-2xl text-red-800 font-semibold">”</span>
          </p>
        </div>
      </div>
      <div className="testimonial-author flex items-center mt-2 px-6">
        <img
          src={"https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg"}
          alt="testimonial author"
          className="w-12 h-12 rounded-full border border-gray-300 hover:border-gray-400"
        />
        <p className="text-red-800 text-lg font-semibold ml-4">{name}</p>
      </div>
    </div>
  );
};

export default Testimonial; 