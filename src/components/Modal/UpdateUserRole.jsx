

// import { Dialog, Transition } from '@headlessui/react'
// import { Fragment } from 'react'

// function UpdateUserRole({ setIsOpen, isOpen }) {


//    function closeModal() {
//       setIsOpen(false)
//    }



//    return (
//       <>




//          <Dialog as="div" className="relative z-10" open={isOpen} >


//             <div className="fixed inset-0 overflow-y-auto">
//                <div className="flex min-h-full text-gray-900 items-center justify-center p-4 text-center">
//                   <Transition.Child
//                      as={Fragment}
//                      enter="ease-out duration-300"
//                      enterFrom="opacity-0 scale-95"
//                      enterTo="opacity-100 scale-100"
//                      leave="ease-in duration-200"
//                      leaveFrom="opacity-100 scale-100"
//                      leaveTo="opacity-0 scale-95"
//                   >
//                      <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
//                         <Dialog.Title
//                            as="h3"
//                            className="text-lg font-medium leading-6 text-gray-900"
//                         >
//                            Updated User Role
//                         </Dialog.Title>
//                         <form>

//                            <select className='w-full border mt-10 border-gray-400 px-3 py-2 rounded-2xl' name="role" id="">
//                               <option value="customer">Customer</option>
//                               <option value="seller">Seller</option>
//                               <option value="admin">Admin</option>
//                            </select>

//                            <div className="flex items-center py-5 justify-between gap-3">
//                               <button type='submit' className="bg-green-600 text-white px-4 py-2 rounded">Updated</button>
//                               <button onClick={closeModal} type='button' className="bg-red-700 text-white px-4 py-2 rounded">Cancel</button>

//                            </div>
//                         </form>

//                      </Dialog.Panel>
//                   </Transition.Child>
//                </div>
//             </div>
//          </Dialog>

//       </>
//    )
// }
// export default UpdateUserRole;


import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import {  useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';



function UpdateUserRolel({ setIsOpen, isOpen, role, userEmail,  }) {
   
   const [updetedrole, setUpdetedrole] = useState(role); 
   const axiosSecure = useAxiosSecure();
   const queryClient =  useQueryClient()
   function close() {
      setIsOpen(false)
   }

   const mutation = useMutation({
      mutationFn: async (role) => {
         const { data } = await axiosSecure.patch(`/user/role/updated/${userEmail}`, { role })
         return data;
      },
      onSuccess: data => {
         console.log(data);
         // refetch();
         toast.success("User role updated sucessfully");
         setIsOpen(false);
         queryClient.invalidateQueries(['user'])

         
      },
      onError: error => {
         console.log(error);
         
      }
   })

   const handlerSumite = (e) => {
      e.preventDefault()
      mutation.mutate(updetedrole) 

   }

   return (
      <>
         

         <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close} __demoMode>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
               <div className="flex min-h-full items-center justify-center p-4">
                  <DialogPanel
                     transition
                     className="w-full max-w-md rounded-xl bg-white/5 shadow-2xl p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
                  >
                     <DialogTitle as="h3" className="text-base/7 font-medium text-white">
                        Updated User Role
                     </DialogTitle>
                     <form onSubmit={handlerSumite}>

                        <select value={updetedrole} onChange={e=> setUpdetedrole(e.target.value)} className='w-full border mt-10 border-gray-400 px-3 py-2 rounded-2xl' name="role" id="">
                           <option value="customer">Customer</option>
                           <option value="seller">Seller</option>
                           <option value="admin">Admin</option>
                        </select>

                        <div className="flex items-center py-5 justify-between gap-3">
                           <button type='submit' className="bg-green-600 text-white px-4 py-2 rounded">Updated</button>
                           <button onClick={close} type='button' className="bg-red-700 text-white px-4 py-2 rounded">Cancel</button>

                        </div>
                     </form>
                  </DialogPanel>
               </div>
            </div>
         </Dialog>
      </>
   )
}
export default UpdateUserRolel;