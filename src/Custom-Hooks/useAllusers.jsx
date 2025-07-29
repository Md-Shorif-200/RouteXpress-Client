import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from './Api/useAxiosSecure';


const useAllusers = () => {
    const  axiosSecure = useAxiosSecure();

        const {data : users = [],isLoading,refetch} = useQuery({
            queryKey : ['users'],
            queryFn : async () => {
                 const res = await axiosSecure.get('/api/users');
                 return res.data
            }
        })
        return [users,isLoading,refetch]
};

export default useAllusers;