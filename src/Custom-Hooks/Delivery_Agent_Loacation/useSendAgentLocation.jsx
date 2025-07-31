import React, { useEffect } from 'react';
import useAxiosSecure from '../Api/useAxiosSecure';
import axios from 'axios';

const useSendAgentLocation = (myPercelData,status) => {
         const percelId = myPercelData.percelId;
         const deliveryAgentCollectionId = myPercelData._id;
         const updatedStatus = status[myPercelData._id]
         const axiosSecure = useAxiosSecure();
         

       
         
         
  useEffect(() => {
    if (!percelId) return;

    const sendLocation = (lat, lng) => {
          const data = {
            percelId : percelId,
             deliveryAgentCollectionId : deliveryAgentCollectionId,
            latitude : lat,
            longitude : lng,
            deliveryStatus : updatedStatus
          }
          axiosSecure.patch('/api/update-deliveryAgent-location',data)
    };

    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        sendLocation(latitude, longitude);
      },
      (err) => {
        console.error("Location error:", err.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, [percelId,deliveryAgentCollectionId,myPercelData.status]);
};

export default useSendAgentLocation;


