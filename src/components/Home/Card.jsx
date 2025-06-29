// import { Link } from "react-router"


// const Card = ({ plant }) => {
//   const { name, quantity, price, image, category, _id } = plant || {}

//   return (
//     <Link
//       to={`/plant/${_id}`}
//       className='col-span-1 cursor-pointer group shadow-lg p-4 rounded-xl border border-gray-200 bg-white hover:shadow-2xl transition-all'
//     >
//       <div className='flex flex-col gap-3 w-full'>
//         <div className='relative w-full h-52 overflow-hidden rounded-lg'>
//           <img
//             className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
//             src={image}
//             alt={name}
//           />
//         </div>

//         <div className='text-gray-800 font-bold text-xl'>{name}</div>
//         <div className='text-gray-600'>Category: {category}</div>
//         <div className='text-gray-600'>Quantity: {quantity}</div>
//         <div className='text-green-600 font-semibold'>Price: ${price}</div>
//       </div>
//     </Link>
//   )
// }

// export default Card

import { Link } from "react-router-dom";

const Card = ({ plant }) => {
  const { name, quantity, price, image, category, _id } = plant || {};

  return (
    <Link
      to={`/plant/${_id}`}
      className="col-span-1 cursor-pointer group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-white border border-gray-100"
    >
      {/* Image container with hover effect */}
      <div className="relative w-full h-60 overflow-hidden rounded-t-xl">
        <img
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          src={image || '/placeholder-plant.jpg'}
          alt={name}
          onError={(e) => {
            e.target.src = '/placeholder-plant.jpg';
          }}
        />
        {/* Category badge */}
        <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-green-800 shadow-sm">
          {category}
        </span>
      </div>

      {/* Content container */}
      <div className="p-4 flex flex-col gap-2">
        {/* Plant name */}
        <h3 className="text-xl font-bold text-gray-900 line-clamp-1">{name}</h3>

        {/* Price and quantity */}
        <div className="flex justify-between items-center mt-2">
          <span className="text-lg font-bold text-green-600">
            ${price?.toFixed(2)}
          </span>
          <span className={`text-sm px-2 py-1 rounded-full ${quantity > 0
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
            }`}>
            {quantity > 0 ? `${quantity} in stock` : 'Out of stock'}
          </span>
        </div>

        {/* Quick action button */}
        <button
          className="mt-3 w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors duration-200 font-medium flex items-center justify-center gap-2"
          onClick={(e) => e.preventDefault()} // Prevent link navigation
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Add to cart
        </button>
      </div>

      {/* Hover overlay effect */}
      <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-all duration-300 pointer-events-none" />
    </Link>
  );
};

export default Card;


