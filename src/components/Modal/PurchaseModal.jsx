import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import useAuth from '../../hooks/useAuth';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutFrom from '../pmantmathod/CheckoutFrom';
import { Elements } from '@stripe/react-stripe-js';


const stripePromise = loadStripe(import.meta.env.VITE_SEKRET_PS_KEY);

const PurchaseModal = ({ closeModal, isOpen, plant,fetchPlant }) => {
  // Total Price Calculation
  const { user } = useAuth();

  const { name, description, category, quantity, price, _id, seller, image } =
    plant || {}
  
  
  const [selectQuantity, setSelectQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price); 
  const [order, setOrder] = useState({
  
    seller,
    plantId: _id,
    quantity: 1,
    status: "panding",
    price: price,
    PlantName: name,
    plantCatagory: category,
    plantimage: image,
    description: description
  })

  useEffect(() => {
     if (user) {
       setOrder(prev => {
         return {
           ...prev,
           customer: {
             name: user?.displayName,
             email: user.email,
             image: user?.photoURL,
          },
           
         }
      })
     }
  },[user])

  const handleQuantity = (value) => {
    const totalQuantity = parseInt(value);
    if (isNaN(totalQuantity) || totalQuantity < 1) {
      toast.error("Quantity must be at least 1");
      setSelectQuantity(1); 
      return;
    }

    if (totalQuantity > quantity) {
      toast.error("You cannot purchase more than available stock");
      return;
    }

    const calcute = totalQuantity * price

    setSelectQuantity(totalQuantity);
    setTotalPrice(calcute);
    setOrder(prev => {
      return {
        ...prev,
        price: calcute,
        quantity: totalQuantity 
       }
    }) 
  };



  

  return (
    <Dialog
      open={isOpen}
      as='div'
      className='relative z-10 focus:outline-none '
      onClose={closeModal}
    >
      <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
        <div className='flex min-h-full items-center justify-center p-4'>
          <DialogPanel
            transition
            className='w-full max-w-md bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0 shadow-xl rounded-2xl'
          >
            <DialogTitle
              as='h3'
              className='text-lg font-medium text-center leading-6 text-gray-900'
            >
              Review Info Before Purchase
            </DialogTitle>
            <div className='mt-2'>
              <p className='text-sm text-gray-500'>{name}</p>
            </div>
            <div className='mt-2'>
              <p className='text-sm text-gray-500'>Category: {category}</p>
            </div>
            <div className='mt-2'>
              <p className='text-sm text-gray-500'>Customer:{seller?.name}</p>
            </div>

            <div className="mt-2">
              <input
                value={selectQuantity}
                onChange={(e) => handleQuantity(e.target.value)}
                className="px-4 py-2 border"
                min={1}
                type="number"
              />
            </div>

            <div className="mt-2">
              <p className="text-sm text-gray-500">Price: ${totalPrice}</p>
            </div>

            <div className='mt-2'>
              <p className='text-sm text-gray-500'>Available Quantity: {quantity}</p>
            </div>

            <Elements stripe={stripePromise}>
              <CheckoutFrom fetchPlant={fetchPlant} closeModal={closeModal} order={order} totalPrice={totalPrice} />
            </Elements>

          </DialogPanel>
        </div> 
      </div>
    </Dialog>
  )
}

export default PurchaseModal
