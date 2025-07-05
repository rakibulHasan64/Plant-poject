


// import { Navigate } from 'react-router';
// import LoadingSpinner from '../components/Shared/LoadingSpinner'
// import useRole from '../hooks/useRole'


// const AdminRoute = ({ children }) => {

//    const { role, isRoleLoading } = useRole();
   

//    if ( isRoleLoading) return <LoadingSpinner />
//    if (role === 'admin') return children
//    return <Navigate to='/dashboard'  />
// }

// export default AdminRoute;


// import { Navigate } from 'react-router';
// import useRole from '../hooks/useRole';
// import LoadingSpinner from '../components/Shared/LoadingSpinner';


// const AdminRoute = ({ children }) => {
//    const { role, isRoleLoading } = useRole();

//    if (isRoleLoading) return <LoadingSpinner />;
//    if (role === 'admin') return children;

//    // return <Navigate to='/' replace={true} />;
//    if (!user || ! "") {
//       return <Navigate to="/login" state={{ from: location }} replace />;
//    }
  

// };

// export default AdminRoute;

import { Navigate, useLocation } from 'react-router-dom';
import useRole from '../hooks/useRole';
import LoadingSpinner from '../components/Shared/LoadingSpinner';
import useAuth from '../hooks/useAuth';


const AdminRoute = ({ children }) => {
   const { user } = useAuth(); 
   const location = useLocation(); 
   
   
   const { role, isRoleLoading } = useRole();

   if (isRoleLoading) return <LoadingSpinner />;

   if (!user) {
      return <Navigate to="/login" state={{ from: location }} replace />;
   }

   if (role === 'admin') return children;

   // যদি ইউজার অ্যাডমিন না হয়, তাহলে হোমে পাঠাও
   return <Navigate to="/dashboard" replace />;
};

export default AdminRoute;

