function BigtwoCard() {
   return (
      <div className=" py-20 mt-16">
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-5">

               {/* Card 1 */}

               <div className="bg-[#FFEAD8] rounded-xl shadow-md flex flex-col md:flex-row justify-between items-center gap-6 p-6">
                  <img
                     src="/public/image.png"
                     alt="plant"
                     className="w-68 h-65 object-contain"
                  />
                  <div className="bg-white bg-opacity-60 p-6 rounded-lg shadow-inner text-center md:text-left">
                     <h3 className="text-2xl font-bold text-[#333]">Best Selling</h3>
                     <p className="text-xl text-green-700 my-2">Get 50% Off</p>
                     <button className="bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 transition">
                        Shop Now
                     </button>
                  </div>

               </div>

               {/* Card 2 */}

               <div className="bg-[#DFFFE5] rounded-xl shadow-md flex flex-col md:flex-row justify-between items-center gap-6 p-6">
                  <img
                     src="/image.png"
                     alt="plant"
                     className="w-68 h-65 object-contain"
                  />
                  <div className="bg-white bg-opacity-60 p-6 rounded-lg shadow-inner text-center md:text-left">
                     <h3 className="text-2xl font-bold text-[#333]">Hot Deal</h3>
                     <p className="text-xl text-green-700 my-2">Buy 1 Get 1 Free</p>
                     <button className="bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 transition">
                        Shop Now
                     </button>
                  </div>
               </div>


            </div>
         </div>
      </div>
   );
}

export default BigtwoCard;
