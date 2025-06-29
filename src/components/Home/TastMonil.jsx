import React from 'react';

function TestimonialCard() {
   const testimonials = [
      {
         name: "Donald Jackman",
         title: "Graphic Designer",
         image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
         rating: 5,
         feedback:
            "I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
      },
      {
         name: "Richard Nelson",
         title: "Content Creator",
         image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
         rating: 5,
         feedback:
            "I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
      },
      {
         name: "James Washington",
         title: "Co-founder",
         image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
         rating: 5,
         feedback:
            "I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
      },
   ];

   const renderStars = (count) => {
      return Array.from({ length: count }).map((_, idx) => (
         <svg
            key={idx}
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <path
               d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z"
               fill="#FF532E"
            />
         </svg>
      ));
   };

   return (
      <div className="flex  md:flex-row flex-col gap-5 items-center justify-center py-20">
         {testimonials.map((user, index) => (
            <div
               key={index}
               className="w-80 flex flex-col items-center border border-gray-300 p-10 rounded-lg bg-white shadow-sm"
            >
               <img
                  className="h-20 w-20 rounded-full object-cover"
                  src={user.image}
                  alt={user.name}
               />
               <h2 className="text-lg text-gray-900 font-medium mt-2">
                  {user.name}
               </h2>
               <p className="text-sm text-gray-500">{user.title}</p>
               <div className="flex items-center justify-center mt-3 gap-1">
                  {renderStars(user.rating)}
               </div>
               <p className="text-center text-[15px] mt-3 text-gray-500">
                  {user.feedback}
               </p>
            </div>
         ))}
      </div>
   );
}

export default TestimonialCard;
