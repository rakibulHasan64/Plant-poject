import React from 'react';

function PlantStatik() {
   const plants = [
      {
         id: 1,
         name: "Monstera Deliciosa",
         type: "Indoor",
         health: "Excellent",
         waterLevel: 75,
         light: "Medium",
         lastWatered: "2 days ago",
         image: "🌿"
      },
      {
         id: 2,
         name: "Snake Plant",
         type: "Indoor",
         health: "Good",
         waterLevel: 30,
         light: "Low",
         lastWatered: "5 days ago",
         image: "🌱"
      },
      {
         id: 3,
         name: "Peace Lily",
         type: "Indoor",
         health: "Needs Care",
         waterLevel: 15,
         light: "Medium",
         lastWatered: "1 week ago",
         image: "🪴"
      }
   ];

   return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
         <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
               <h1 className="text-4xl font-bold text-green-800 mb-2">PlantStatik</h1>
               <p className="text-xl text-green-600">Your plant health monitoring system</p>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
               <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <h3 className="text-lg font-medium text-gray-500">Total Plants</h3>
                  <p className="text-4xl font-bold text-green-600 mt-2">24</p>
               </div>
               <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <h3 className="text-lg font-medium text-gray-500">Need Water</h3>
                  <p className="text-4xl font-bold text-yellow-600 mt-2">5</p>
               </div>
               <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <h3 className="text-lg font-medium text-gray-500">Healthy</h3>
                  <p className="text-4xl font-bold text-green-600 mt-2">18</p>
               </div>
            </div>

            {/* Plant Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {plants.map((plant) => (
                  <div key={plant.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                     <div className="bg-green-100 h-48 flex items-center justify-center text-8xl">
                        {plant.image}
                     </div>
                     <div className="p-6">
                        <div className="flex justify-between items-start">
                           <h2 className="text-2xl font-bold text-gray-800">{plant.name}</h2>
                           <span className={`px-3 py-1 rounded-full text-sm font-medium ${plant.health === "Excellent" ? "bg-green-100 text-green-800" :
                                 plant.health === "Good" ? "bg-blue-100 text-blue-800" :
                                    "bg-yellow-100 text-yellow-800"
                              }`}>
                              {plant.health}
                           </span>
                        </div>
                        <p className="text-gray-500 mt-1">{plant.type} Plant</p>

                        {/* Water Level */}
                        <div className="mt-4">
                           <div className="flex justify-between text-sm text-gray-600 mb-1">
                              <span>Water Level</span>
                              <span>{plant.waterLevel}%</span>
                           </div>
                           <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div
                                 className={`h-2.5 rounded-full ${plant.waterLevel > 60 ? "bg-blue-600" :
                                       plant.waterLevel > 30 ? "bg-green-600" : "bg-yellow-500"
                                    }`}
                                 style={{ width: `${plant.waterLevel}%` }}
                              ></div>
                           </div>
                        </div>

                        {/* Plant Details */}
                        <div className="grid grid-cols-2 gap-4 mt-6">
                           <div>
                              <p className="text-sm text-gray-500">Light Needs</p>
                              <p className="font-medium">{plant.light}</p>
                           </div>
                           <div>
                              <p className="text-sm text-gray-500">Last Watered</p>
                              <p className="font-medium">{plant.lastWatered}</p>
                           </div>
                        </div>

                        <button className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors">
                           View Details
                        </button>
                     </div>
                  </div>
               ))}
            </div>

            {/* Footer */}
            <div className="mt-16 text-center text-gray-500">
               <p>© 2023 PlantStatik - Keep your plants thriving</p>
            </div>
         </div>
      </div>
   );
}

export default PlantStatik;