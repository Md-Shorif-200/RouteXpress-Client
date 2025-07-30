import React from 'react';
import useBookedPercel from '../../Custom-Hooks/useBookedPercel';
import useAuth from '../../Custom-Hooks/useAuth';

const BookingHIstory = () => {

             const [bookedPercels,isLoading,refetch] = useBookedPercel();
             const {user} = useAuth();

             const myBookedPercels = bookedPercels?.filter(percels => percels?.customerEmail === user?.email)

             


    return (
            <div className='p-4'>
                        <h1 className='text-2xl font-semibold mb-4 '>Total Percels : {myBookedPercels.length} </h1>
                     <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Percel Size</th>
        <th>Picup Address</th>
        <th>Delevery Address</th>
        <th>Payment Type</th>
        <th>Booking Date</th>
        <th>Delivery Status</th>
      </tr>
    </thead>
    <tbody>
     
      {
         myBookedPercels.map((myPercel,index) => {
    
                    return (
                           <tr>
        <th>{index +1} </th>
                        <td> {myPercel.percelSize} </td>
                        <td> {myPercel.picupAddress} </td>
                        <td> {myPercel.deliveryAddress} </td>
                        <td> {myPercel.payment} </td>
                        <td> {myPercel.bookedDate} </td>
                       <td>
  <span
    className={`px-3 py-1 rounded-full text-sm font-semibold
      ${myPercel.status === 'pending' && 'bg-gray-200 text-gray-800'}
      ${myPercel.status === 'Picked_Up' && 'bg-blue-200 text-blue-800'}
      ${myPercel.status === 'In_Transit' && 'bg-yellow-200 text-yellow-800'}
      ${myPercel.status === 'Delivered' && 'bg-green-200 text-green-800'}
      ${myPercel.status === 'Failed' && 'bg-red-200 text-red-800'}
    `}
  >
    {myPercel.status}
  </span>
</td>

      </tr>
                    )
         })
      }
    
    </tbody>
  </table>
</div>
            </div>
    );
};

export default BookingHIstory;