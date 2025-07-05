import Seller from '../../../components/allstatick/Seller';
import Userstsik from '../../../components/allstatick/Userstsik';
import AdminStatistics from '../../../components/Dashboard/Statistics/AdminStatistics'
import LoadingSpinner from '../../../components/Shared/LoadingSpinner';
import useRole from '../../../hooks/useRole'

const Statistics = () => {

  const { role, isRoleLoading } = useRole();

  if (isRoleLoading) {
    return <LoadingSpinner />
  }

  
  
     
  return (
    <div>

      {role == "admin" && <AdminStatistics />}
      {role == "seller" && <Seller />}
      {role == "user" && <Userstsik />}
    
  
      
    </div>
  )
}

export default Statistics
