import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Phone = ({ phone }) => {
  // console.log(phone);
  const {id, brand_name, image, phone_name, price, rating } = phone || ''  ;
  return (
    <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
        <img src={image} className="h-full w-full object-cover" />
      </div>
      <div className="p-6">
        <div className="mb-2 flex items-center justify-between">
          <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            {brand_name}
          </p>
          <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            {price} $
          </p>
        </div>
        <p className="block font-sans  font-normal leading-normal text-black  antialiased opacity-75 text-2xl">
          {phone_name}
        </p>
        <p className="block font-sans text-md font-normal leading-normal text-yellow-500 antialiased opacity-75">
          {rating} <span className="font-extrabold">*</span>
        </p>
      </div>
      <div className="p-6 pt-0">
        <Link to={`/phone/${id}`}>
        <button
          className="block w-full bg-gray-400  hover:bg-blue-500 hover:text-white select-none rounded-lg  py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase  transition-all hover:scale-105 focus:scale-105 focus:opacity-[1] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-md"
          type="button"
        >
          See Details
        </button>
        </Link>
      </div>
    </div>
  );
};

Phone.propTypes = {
  phone: PropTypes.object.isRequired,
};
export default Phone;
