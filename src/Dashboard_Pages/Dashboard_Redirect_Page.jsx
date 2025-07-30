import React from 'react';

import { Navigate } from 'react-router-dom';
import useRole from '../Custom-Hooks/Api/useRole';
import Loading from '../Components/Loading';

const Dashboard_Redirect_Page = () => {
      const [role,isLoading,refetch] = useRole();

      console.log(role);
      
 

      
      if(isLoading || !role){
            return <Loading></Loading>
      }

                            

                    if(role == 'customer'){
                           return <Navigate to='/dashboard/booking-history'></Navigate>
                    }else if(role === 'admin'){
                        return <Navigate to='/dashboard/admin'></Navigate>
                    }else{
                          return <Navigate to='/dashboard/teacher'></Navigate>
                    }


};

export default Dashboard_Redirect_Page;