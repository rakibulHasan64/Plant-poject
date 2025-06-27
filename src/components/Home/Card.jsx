import { Link } from "react-router"


const Card = ({ plant }) => {
  const { name, quantity, price, image, category, _id } = plant || {}

  return (
    <Link
      to={`/plant/${_id}`}
      className='col-span-1 cursor-pointer group shadow-lg p-4 rounded-xl border border-gray-200 bg-white hover:shadow-2xl transition-all'
    >
      <div className='flex flex-col gap-3 w-full'>
        <div className='relative w-full h-52 overflow-hidden rounded-lg'>
          <img
            className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
            src={image}
            alt={name}
          />
        </div>

        <div className='text-gray-800 font-bold text-xl'>{name}</div>
        <div className='text-gray-600'>Category: {category}</div>
        <div className='text-gray-600'>Quantity: {quantity}</div>
        <div className='text-green-600 font-semibold'>Price: ${price}</div>
      </div>
    </Link>
  )
}

export default Card
