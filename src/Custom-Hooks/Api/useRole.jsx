import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../useAuth';
import useAllusers from '../useAllusers';

const useRole = () => {
            const [users,isLoading,refetch] = useAllusers() // get all users
            const {user} = useAuth();

            
          const  singleUser = users?.find(data => data?.email == user?.email);
      
          
          const role = singleUser?.role;
          
           return [role,isLoading,refetch]

                 
                  
   
};

export default useRole;