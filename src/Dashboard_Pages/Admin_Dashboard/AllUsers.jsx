import React, { useState } from "react";
import useAllusers from "../../Custom-Hooks/useAllusers";
import useAxiosSecure from "../../Custom-Hooks/Api/useAxiosSecure";
import useAuth from "../../Custom-Hooks/useAuth";
import toast from "react-hot-toast";

const AllUsers = () => {
  const [users, isLoading, refetch] = useAllusers();
  const axiosSecure = useAxiosSecure() ;
//   const {user} = useAuth();
//   const [assignRole,setAssignRole] = useState('')
//   console.log(assignRole);


//   assign role function
const handleAssignRole = async (user,newRole) => {
     console.log(user,newRole);
     
    const updatedRole = {
        role : newRole,
    }


    try {
        const response = await axiosSecure.patch(`/api/users/update-role/${user.email}`, updatedRole);
        
          if(response.data.acknowledged &&  response.data.modifiedCount > 0){
                    refetch()
              toast.success(`${user.userName} is now a ${user.role}`)
          }
        
    } catch (error) {
            console.log(error);
            toast.error(error.message)
               
    }
        
}
  

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
    onChange={(e) => handleAssignRole(user, e.target.value)}
  >
    <option disabled>Assign Role</option>
    <option value="admin">Make Admin</option>
    <option value="deliveryAgent">Make Delivery Agent</option>
    <option value="customer">Customer</option>

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
