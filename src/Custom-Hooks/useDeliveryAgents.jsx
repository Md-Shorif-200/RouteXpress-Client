import React from 'react';
import useAllusers from './useAllusers';

const useDeliveryAgents = () => {

                        const [users,isLoading,refetch] = useAllusers() ;
                        const deliveryAgents = users.filter(user => user?.role === 'deliveryAgent');

    return  [deliveryAgents,isLoading,refetch]
};

export default useDeliveryAgents;