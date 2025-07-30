import React from 'react';
import Loading from '../Components/Loading';
import useRole from '../Custom-Hooks/Api/useRole';
import Customer_Menu from './Customer_Dashboard/Customer_Menu';
import Admin_Menu from './Admin_Dashboard/Admin_Menu';




const DashboardSidebar = () => {

      const [role,isLoading,refetch] = useRole();

           if(isLoading){
             <Loading></Loading>
           }
    return (
      <div className="drawer-side w-full  bg-black/15 ">
      <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
     {role === 'customer' &&                 <Customer_Menu></Customer_Menu> }
  {role === 'admin' &&                <Admin_Menu></Admin_Menu> }

   
    </div>
    );
};

export default DashboardSidebar;




           