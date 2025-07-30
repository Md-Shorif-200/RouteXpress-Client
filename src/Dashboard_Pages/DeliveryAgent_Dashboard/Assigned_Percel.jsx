import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../Custom-Hooks/Api/useAxiosSecure";
import useAuth from "../../Custom-Hooks/useAuth";
import Loading from "../../Components/Loading";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import useAssingedPercel from "../../Custom-Hooks/useAssingedPercel";

const Assigned_Percel = () => {
  const [assignedPercels, isLoading, refetch] = useAssingedPercel();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  // get my Percels
  const myAssignedPercels = assignedPercels?.filter(
    (percel) => percel?.deliveryAgentEmail === user?.email
  );
  console.log(myAssignedPercels);

  // change percel status function
  const handlePercelStatus = async (myPercel, updatedStatus) => {
    console.log(myPercel, updatedStatus);
    const statusData = {
      delivery_Agent_collection_id: myPercel._id,
      percelId: myPercel.percelId,
      status: updatedStatus,
    };

    // Status-wise title message
    let titleMessage = "Percel status updated";

    if (updatedStatus === "Picked_Up") {
      titleMessage = "Percel has been picked up";
    } else if (updatedStatus === "In_Transit") {
      titleMessage = "Percel is now in transit";
    } else if (updatedStatus === "Delivered") {
      titleMessage = "Percel has been delivered";
    } else if (updatedStatus === "Failed") {
      titleMessage = "Percel delivery failed";
    }

    try {
      const response = await axiosSecure.patch(
        "/api/change-percel-status",
        statusData
      );
      const result = response.data;
      if (
        result.bookedPercel.acknowledged &&
        result.bookedPercel.modifiedCount > 0 &&
        result.deliveryAgent.modifiedCount > 0
      ) {
        Swal.fire({
          title: titleMessage,
          icon: "success",
          draggable: true,
        });

        refetch() // refetch all data 
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4 ">
        Total Assigned Percels : {myAssignedPercels?.length}{" "}
      </h1>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Customer Email</th>
              <th>Percel Size</th>
              <th>Picup Address</th>
              <th>Delevery Address</th>
              <th>Payment Type</th>
              <th> Status</th>
              <th>Change Status</th>
            </tr>
          </thead>
          <tbody>
            {myAssignedPercels?.map((myPercel, index) => {
              return (
                <tr>
                  <th>{index + 1} </th>
                  <td> {myPercel.customerEmail} </td>
                  <td> {myPercel.percelSize} </td>
                  <td> {myPercel.picupAddress} </td>
                  <td> {myPercel.deliveryAddress} </td>
                  <td> {myPercel.paymentType} </td>

                  <td>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold
      ${myPercel.status === "pending" && "bg-gray-200 text-gray-800"}
      ${myPercel.status === "Picked_Up" && "bg-blue-200 text-blue-800"}
      ${myPercel.status === "In_Transit" && "bg-yellow-200 text-yellow-800"}
      ${myPercel.status === "Delivered" && "bg-green-200 text-green-800"}
      ${myPercel.status === "Failed" && "bg-red-200 text-red-800"}
    `}
                    >
                      {myPercel.status}
                    </span>
                  </td>

                  {/* ------------- change percel status  */}
                  <td>
                    <select
                      className="select select-sm select-bordered w-44"
                      onChange={(e) =>
                        handlePercelStatus(myPercel, e.target.value)
                      }
                    >
                      <option disabled>Select Delivery Status</option>
                      <option value="Picked_Up">Picked Up</option>
                      <option value="Delivered">Delivered</option>
                      <option value="In_Transit">In Transit</option>
                      <option value="Failed">Faild</option>
                    </select>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Assigned_Percel;
