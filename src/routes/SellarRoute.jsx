

import { Navigate } from 'react-router'
import useRole from '../hooks/useRole';
import LoadingSpinner from '../components/Shared/LoadingSpinner';



const SellarRoute = ({ children }) => {

   const { role, isRoleLoadin } = useRole();


   if (isRoleLoadin) return <LoadingSpinner />
   if (role === 'seller') return children
   return <Navigate to='/' />
}

export default SellarRoute;
