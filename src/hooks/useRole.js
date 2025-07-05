
// import useAxiosSecure from "./useAxiosSecure";
// import useAuth from "./useAuth";
// import { useQuery } from "@tanstack/react-query";

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


// function useRole() {

//    const { user,loading } = useAuth();
  
//   const axiosSecure = useAxiosSecure();
  

//   const {data: role,isLoading: isRoleLoading } = useQuery({
//     queryKey: ["role", user?.email],
//     enabled: !loading && !!user?.email,
//      queryFn: async () => {
//       const { data } = await axiosSecure(`${import.meta.env.VITE_API_URL}/user/role/${user.email}`);
      
//       return data
//      }

//   })
  

  

   
   
//    return [  role?.role,isRoleLoading];
   
// }

// export default useRole;

function useRole() {
   const { user, loading } = useAuth();
   const axiosSecure = useAxiosSecure();
 
   const { data: roleData, isLoading: isRoleLoading } = useQuery({
     queryKey: ["role", user?.email],
     enabled: !loading && !!user?.email,
     queryFn: async () => {
       const { data } = await axiosSecure(`${import.meta.env.VITE_API_URL}/user/role/${user.email}`);
       return data;
     }
   });
 
   return {
     role: roleData?.role,  // "admin" / "user" etc.
     isRoleLoading,
   };
 }

 export default useRole;