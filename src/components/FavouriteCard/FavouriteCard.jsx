import PropTypes from 'prop-types';
const FavouriteCard = ({singleItem}) => {
    const {image, phone_name, brand_name, price} = singleItem
    // console.log(singleItem);
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
        </div>
      </div>
    );
};


FavouriteCard.propTypes = {
    singleItem: PropTypes.object.isRequired
}
export default FavouriteCard;