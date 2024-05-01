const Testimonial = ({ content, name }) => {
    return (
      <div className="bg-gray-900 rounded-lg p-5 flex flex-col justify-between h-72 w-96 gap-10">
        <div>
          <p className="text-white text-lg font-semibold">{content}</p>
        </div>
        <div className="flex items-center gap-20">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg"
            alt="testimonial image"
            className="w-10 h-10 rounded-full"
          />
          <p className="text-red-500 text-lg font-semibold">{name}</p>
        </div>
      </div>
    );
  };
  
  export default Testimonial;