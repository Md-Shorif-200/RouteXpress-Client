import React, { useState } from "react";
import useAllusers from "../../Custom-Hooks/useAllusers";

const AllUsers = () => {
  const [users, isLoading, refetch] = useAllusers();
  const [assignRole,setAssignRole] = useState('')

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4 ">
        Total Users : {users.length}{" "}
      </h1>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>User Image</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>Joining Date</th>
              <th>Role</th>
              <th>Assing Role </th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => {
              return (
                <tr>
                  <th>{index + 1} </th>
                  <td>
                    <img
                      src={user?.image}
                      alt="user-img"
                      className="w-10 h-10 rounded-full border "
                    />
                  </td>
                  <td> {user?.userName} </td>
                  <td> {user?.email} </td>
                  <td> {user?.joiningDate} </td>

               <td>
  <span
    className={`px-3 py-1 rounded-full text-sm font-semibold  inline-block w-[120px]  text-center
      ${user?.role === 'customer' && 'bg-blue-300 text-black '}
      ${user?.role === 'admin' && 'bg-orange-300 text-black '}
      ${user?.role === 'deliveryAgent' && 'bg-green-300 text-black '}
  
    `}
  >
   {user?.role}
  </span>
</td>

<td>
  <select
    className="select select-sm select-bordered w-44"
    onChange={(e) => setAssignRole(e.target.value)}
  >
    <option disabled>Assign Role</option>
    <option value="admin">Make Admin</option>
    <option value="deliveryAgent">Make Delivery Agent</option>

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

export default AllUsers;
