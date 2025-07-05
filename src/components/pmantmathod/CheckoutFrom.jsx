import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";



function CheckoutFrom({ totalPrice, closeModal, order, fetchPlant }) {



   // const { name, description, category, quantity, price, _id, seller, image } =
   //    plant || {}
   const { user } = useAuth();
   const stripe = useStripe();
   const elements = useElements();
   const axiosSecure = useAxiosSecure();
   const [error, setError] = useState(null);
   const [processinge, setProcessinge] = useState(false);
   const [clintSecret, setClintSecret] = useState('');

   useEffect(() => {

      const getClintSecret = async () => {
         const { data } = await axiosSecure.post('/create-payment-intent', {
            quantity: order?.quantity,
            plantId: order?.plantId,
            

         })

         setClintSecret(data?.clientSecret)




      }
      getClintSecret()

   }, [axiosSecure, order])

   const handleSubmit = async (event) => {

      setProcessinge(true);
      event.preventDefault();

      if (!stripe || !elements) {

         return;
      }


      const card = elements.getElement(CardElement);

      if (card == null) {
         return;
      }

      const { error, paymentMethod } = await stripe.createPaymentMethod({
         type: 'card',
         card,
      });

      if (error) {
         console.log('[error]', error);
         setError(error.message);
         setProcessinge(false)
      } else {
         console.log('[PaymentMethod]', paymentMethod);
         setError(null)
      }


      const result = await stripe
         .confirmCardPayment(clintSecret, {
            payment_method: {
               card,
               billing_details: {
                  name: user?.displayName || "Unknown",
                  email: user?.email || "No email",

               }
            }
         })


      if (result?.error) {
         setError(result?.error?.message)
         return
      }

      if (result?.paymentIntent?.status === "succeeded") {
         order.transactionId = result?.paymentIntent?.id
         try {
            const { data } = await axiosSecure.post("/order", order);

            if (data?.insertedId) {
               toast.success("✅ Order placed successfully!");
            }

            const { data: result } = await axiosSecure.patch(
               `/quantity-update/${order.plantId}`,
               {
                  quantityToUpdate: order.quantity,
                  status: "decrease",
               }
            );
            fetchPlant();

            console.log(result);
            
           
         } catch (error) {

            console.log(error);


         } finally {
            setProcessinge(false);
            setError(null)
            closeModal()
         }

      }
      console.log(result);



   };
   return (
      <>

         <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-6">
            <CardElement
               options={{
                  style: {
                     base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                           color: '#aab7c4',
                        },
                     },
                     invalid: {
                        color: '#9e2146',
                     },
                  },
               }}
            />

            {error && <p className="text-red-600 py-3">{error}</p>}

            <div className="mt-4 flex items-center gap-4">
               <button
                  type="submit"
                  disabled={!stripe || processinge}
                  className={`px-6 py-2 rounded-md text-white font-semibold transition-all duration-300
        ${!stripe || processinge
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-green-600 hover:bg-green-700'}
      `}
               >
                  {processinge ? 'Processing...' : `Pay $${totalPrice}`}
               </button>

               <button
                  onClick={closeModal}
                  type="button"
                  className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all duration-300"
               >
                  Cancel
               </button>
            </div>
         </form>

      </>
   );
}

export default CheckoutFrom;

