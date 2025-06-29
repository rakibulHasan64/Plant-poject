import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { Link } from "react-router";
import { fetchCartItems } from "../../api/api";

function AddToCatModa({ handaddtocartmodal }) {
   const { user } = useAuth();
   const [cartItems, setCartItems] = useState([]);
   const [loading, setLoading] = useState(true);


   useEffect(() => {
      if (user?.email) {
         fetchCartItems(user.email)
            .then(data => setCartItems(data))
            .catch(err => console.error("Cart load error", err))
            .finally(() => setLoading(false));
      }
   }, [user]);

   const handleQuantityChange = () => {
      console.log();
      
   }

   
    

   return (
      <div className="fixed inset-0 flex justify-end items-start z-50 bg-black/30">
         <div className="bg-white w-full max-w-md h-full shadow-2xl p-6 relative overflow-auto rounded-l-xl">
            <button
               onClick={handaddtocartmodal}
               className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-2xl"
            >
               &times;
            </button>

            <h2 className="text-2xl font-bold text-center mb-4">Your Cart</h2>

            {loading ? (
               <p className="text-center text-gray-500">Loading...</p>
            ) : cartItems.length === 0 ? (
               <p className="text-center text-gray-400">Cart is empty.</p>
            ) : (
               <div className="space-y-3">
                  {cartItems?.map((item) => (
                     <div key={item._id} className="border p-3 rounded shadow flex gap-4 items-center">
                     
                           <img
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded"
                           />
                        
                        <div className="flex-1">
                           <h3 className="font-semibold">{item.name}</h3>
                           <p className="text-sm text-gray-600">{item.category}</p>
                           <p className="text-green-600 font-bold">৳{item.price}</p>

                           {/* Quantity Control */}
                           <div className="flex items-center mt-2 gap-2">
                              <button
                                 onClick={() => handleQuantityChange(item._id,)}
                                 className="bg-gray-200 p-1 rounded hover:bg-gray-300"
                              >
                                 <FaMinus className="text-sm" />
                              </button>
                              <span className="px-2">1</span>
                              <button
                                 onClick={() => handleQuantityChange(item._id,)}
                                 className="bg-gray-200 p-1 rounded hover:bg-gray-300"
                              >
                                 <FaPlus className="text-sm" />
                              </button>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            )}
         </div>
      </div>
   );
}

export default AddToCatModa;
