import React from 'react';

const PercelLocationModal = ({setModalOpen,myPercelData}) => {
    console.log(myPercelData);
    


  const { percelSize, picupAddress, deliveryAddress, status, agentName } = myPercelData || {};

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/35">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[500px] relative">
        {/* Close Button */}
        <button
          onClick={() => setModalOpen(false)}
          className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-5xl font-medium"
        >
          &times;
        </button>

       {/* Title */}
<h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
  📦 Percel Location Info
</h2>

{/* Percel Details in Card Style */}
<div className="grid gap-4 text-gray-700">
  <div className="bg-gray-100 p-3 rounded-lg shadow-sm flex items-center gap-3">
    <span className="primary_text_color font-bold w-40">Percel Size:</span>
    <span className="font-medium">{percelSize}</span>
  </div>

  <div className="bg-gray-100 p-3 rounded-lg shadow-sm flex items-center gap-3">
    <span className="primary_text_color font-bold w-40">Pickup Address:</span>
    <span className="font-medium">{picupAddress}</span>
  </div>

  <div className="bg-gray-100 p-3 rounded-lg shadow-sm flex items-center gap-3">
    <span className="primary_text_color font-bold w-40">Delivery Address:</span>
    <span className="font-medium">{deliveryAddress}</span>
  </div>

  <div className="bg-gray-100 p-3 rounded-lg shadow-sm flex items-center gap-3">
    <span className="primary_text_color font-bold w-40">Status:</span>
    <span
      className={`px-3 py-1 rounded-full text-sm font-semibold 
        ${status === 'pending' && 'bg-gray-300 text-gray-800'}
        ${status === 'Picked_Up' && 'bg-blue-200 text-blue-800'}
        ${status === 'In_Transit' && 'bg-yellow-200 text-yellow-800'}
        ${status === 'Delivered' && 'bg-green-200 text-green-800'}
        ${status === 'Failed' && 'bg-red-200 text-red-800'}
      `}
    >
      {status}
    </span>
  </div>

  <div className="bg-gray-100 p-3 rounded-lg shadow-sm flex items-center gap-3">
    <span className="primary_text_color font-bold w-40">Agent Name:</span>
    <span className="font-medium">{agentName || "Not Assigned"}</span>
  </div>
</div>


        {/* Google Map Button */}
        <div className="mt-6 text-center">
          <button
            className="primary_btn"
            onClick={() => alert("Google Map link will be opened here.")}
          >
            View on Google Map
          </button>
        </div>
      </div>
    </div>
  );
};

export default PercelLocationModal;
