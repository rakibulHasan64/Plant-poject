import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


function useRole() {

   const { user } = useAuth();
   const [role, setRole] = useState(null);
   const [isRoleLoading,setIsRoleLoading]=useState(true)
   const axiosSecure = useAxiosSecure();

   useEffect(() => {
      if (!user?.email) return;
    
      const fetchUserRole = async () => {
        try {
          const { data } = await axiosSecure(`${import.meta.env.VITE_API_URL}/user/role/${user.email}`);
          setRole(data?.role);
        } catch (error) {
          console.error("Failed to fetch user role:", error);
        } finally {
          setIsRoleLoading(false);
        }
      };
    
      fetchUserRole();
    }, [axiosSecure, user?.email]);
    

   console.log(role);
   
   
   return [role,isRoleLoading];
   
}

export default useRole;