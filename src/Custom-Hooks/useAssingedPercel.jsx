import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from './Api/useAxiosSecure';




const useAssingedPercel = () => {
    const  axiosSecure = useAxiosSecure();

        const {data : assignedPercels = [],isLoading,refetch} = useQuery({
            queryKey : ['assignedPercels'],
            queryFn : async () => {
                 const res = await axiosSecure.get('/api/select-deliveryAgent');
                 return res.data
            }
        })
        return [assignedPercels,isLoading,refetch] // get all percels which assign a specific delevery aget
};

export default useAssingedPercel;