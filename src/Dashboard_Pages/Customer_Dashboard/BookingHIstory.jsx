import React, { useState } from 'react';
import useBookedPercel from '../../Custom-Hooks/useBookedPercel';
import useAuth from '../../Custom-Hooks/useAuth';
import { FaLocationDot } from "react-icons/fa6";
import { GiShieldDisabled } from "react-icons/gi";
import PercelLocationModal from './PercelLocationModal';

const BookingHIstory = () => {
  const [bookedPercels, isLoading, refetch] = useBookedPercel();
  const { user } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPercel, setSelectedPercel] = useState(null);

  const myBookedPercels = bookedPercels?.filter(
    (percels) => percels?.customerEmail === user?.email
  );

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-semibold mb-4'>
        Total Percels : {myBookedPercels.length}
      </h1>

      {/* -------- Modal Show Here ---------- */}
      {modalOpen && selectedPercel && (
        <PercelLocationModal
          setModalOpen={setModalOpen}
          myPercelData={selectedPercel}
        />
      )}

      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Percel Size</th>
              <th>Pickup Address</th>
              <th>Delivery Address</th>
              <th>Payment Type</th>
              <th>Booking Date</th>
              <th>Delivery Status</th>
              <th>Track Percel Location</th>
            </tr>
          </thead>

          <tbody>
            {myBookedPercels.map((myPercel, index) => (
              <tr key={myPercel._id}>
                <th>{index + 1}</th>
                <td>{myPercel.percelSize}</td>
                <td>{myPercel.picupAddress}</td>
                <td>{myPercel.deliveryAddress}</td>
                <td>{myPercel.payment}</td>
                <td>{myPercel.bookedDate}</td>

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

                <td>
                  {(myPercel.status === 'pending' || myPercel.status === 'Failed') ? (
                    <div className="tooltip" data-tip={
                      myPercel.status === 'pending'
                        ? 'Your Percel is Not Picked Up. Please Wait'
                        : 'Your Percel Delivery is Failed. Contact Us'
                    }>
                      <button className="disabled_button w-[170px] flex items-center gap-x-2" disabled>
                        <GiShieldDisabled />
                        Track Location
                      </button>
                    </div>
                  ) : (
                    <button
                      className='primary_btn w-[170px] flex items-center gap-x-2'
                      onClick={() => {
                        setSelectedPercel(myPercel);
                        setModalOpen(true);
                      }}
                    >
                      <FaLocationDot />
                      Track Location
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingHIstory;
