import { useState, useEffect } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router-dom"; 

function SharchModal({ handmodaloff }) {
   const [search, setSearch] = useState('');
   const [results, setResults] = useState([]);
   
   const axiosSecure = useAxiosSecure();



   useEffect(() => {
      if (search.trim()) {
         const delayDebounce = setTimeout(() => {
            axiosSecure
               .get(`/plants/search?q=${search}`)
               .then(res => {
                  setResults(res.data);
               })
               .catch(err => {
                  console.error("Search error:", err);
               });
         }, 300);

         return () => clearTimeout(delayDebounce);
      } else {
         setResults([]);
      }
   }, [search, axiosSecure]);

   return (
      <div className="fixed inset-0 flex justify-end items-start z-50 bg-black/30">
         <div className="bg-white w-full max-w-md h-full shadow-2xl p-6 relative overflow-auto rounded-l-xl">
            <button
               onClick={handmodaloff}
               className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-2xl"
            >
               &times;
            </button>

            <h2 className="text-2xl font-bold mb-4 text-center text-green-700">Search Plants</h2>

            <input
               type="text"
               value={search}
               onChange={(e) => setSearch(e.target.value)}
               placeholder="Search by name..."
               className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-green-400"
            />

            <div className="space-y-3">
               {results?.length > 0 ? (
                  results.map((plant) => (
                     <div
                        key={plant._id}
                        className="border p-3 rounded-lg shadow flex items-center gap-4 hover:shadow-md transition"
                     >
                        <Link
                           to={`plant/${plant._id}`}
                           className="flex items-center gap-4 flex-1"
                        >
                           <img
                              src={plant.image}
                              alt={plant.name}
                              className="w-20 h-20 object-cover rounded-lg border"
                           />
                           <div>
                              <h3 className="font-semibold text-lg text-gray-800">{plant.name}</h3>
                              <p className="text-sm text-gray-500">{plant.category}</p>
                              <p className="mt-1 text-green-600 font-bold">৳{plant.price}</p>
                           </div>
                        </Link>
                        <button
                           
                           className="text-md font-bold px-3 py-1 rounded-full text-white bg-green-600 hover:bg-green-700"
                           
                        >quantity _
                           {plant.
                              quantity}
                           
                        </button>
                     </div>
                  ))
               ) : (
                  search && <p className="text-center text-gray-500">No results found.</p>
               )}
            </div>
         </div>
      </div>
   );
}

export default SharchModal;
