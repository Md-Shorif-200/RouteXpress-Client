import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from './Api/useAxiosSecure';



const useBookedPercel = () => {
    const  axiosSecure = useAxiosSecure();

        const {data : bookedPercels = [],isLoading,refetch} = useQuery({
            queryKey : ['bookedPercels'],
            queryFn : async () => {
                 const res = await axiosSecure.get('/api/book-percel');
                 return res.data
            }
        })
        return [bookedPercels,isLoading,refetch]
};

export default useBookedPercel;