import React, { useState } from 'react';
import useBookedPercel from '../../Custom-Hooks/useBookedPercel';
import useDeliveryAgents from '../../Custom-Hooks/useDeliveryAgents';
import Loading from '../../Components/Loading';
import toast from 'react-hot-toast';
import useAxiosSecure from '../../Custom-Hooks/Api/useAxiosSecure';

const AllPercels = () => {
  const [bookedPercels, isLoading, refetch] = useBookedPercel(); // get all parcels
  const [deliveryAgents] = useDeliveryAgents(); // get all delivery agents
  const axiosSecure = useAxiosSecure(); // private API

  // State to track selected agent for each parcel
  const [selectedAgents, setSelectedAgents] = useState({});

  // Send parcel data and email to delivery agent
  const handleSendEmail = async (percel) => {
    const agentEmail = selectedAgents[percel._id];

    if (!agentEmail) {
      toast.error('Please select a delivery agent first');
      return;
    }

    const data = {
      percelId: percel._id,
      agentEmail: agentEmail,
    };

    try {
      const response = await axiosSecure.post('/api/select-deliveryAgent', data);
      console.log(response.data);
      toast.success('Agent assigned and email sent!');
    } catch (error) {
      console.error(error);
      toast.error('Failed to assign agent');
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">
        Total Percels : {bookedPercels.length}
      </h1>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Customer Name</th>
              <th>Customer Email</th>
              <th>Pickup Address</th>
              <th>Delivery Address</th>
              <th>Parcel Size</th>
              <th>Booked Date</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Select Delivery Agent</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookedPercels?.map((percel, index) => (
              <tr key={percel._id}>
                <th>{index + 1}</th>
                <td>{percel?.customerName}</td>
                <td>{percel?.customerEmail}</td>
                <td>{percel?.picupAddress}</td>
                <td>{percel?.deliveryAddress}</td>
                <td>{percel?.percelSize}</td>
                <td>{percel?.bookedDate}</td>
                <td>{percel?.payment}</td>
                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold
                      ${percel.status === 'pending' && 'bg-gray-200 text-gray-800'}
                      ${percel.status === 'Picked Up' && 'bg-blue-200 text-blue-800'}
                      ${percel.status === 'In Transit' && 'bg-yellow-200 text-yellow-800'}
                      ${percel.status === 'Delivered' && 'bg-green-200 text-green-800'}
                      ${percel.status === 'Failed' && 'bg-red-200 text-red-800'}
                    `}
                  >
                    {percel.status}
                  </span>
                </td>

                <td>
                  <select
                    className="select select-bordered w-full max-w-xs"
                    onChange={(e) =>
                      setSelectedAgents((prev) => ({
                        ...prev,
                        [percel._id]: e.target.value,
                      }))
                    }
                    value={selectedAgents[percel._id] || ''}
                  >
                    <option value="" disabled>
                      Select Agent
                    </option>
                    {deliveryAgents?.map((agent) => (
                      <option key={agent._id} value={agent.email}>
                        {agent.userName}
                      </option>
                    ))}
                  </select>
                </td>

                <td>
                  <button
                    className="primary_btn"
                    onClick={() => handleSendEmail(percel)}
                  >
                    Send
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllPercels;
