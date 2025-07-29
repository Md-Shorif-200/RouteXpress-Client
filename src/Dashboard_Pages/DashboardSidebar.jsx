import React from 'react';
import Loading from '../Components/Loading';
import useRole from '../Custom-Hooks/Api/useRole';
import Customer_Menu from './Customer_Dashboard/Customer_Menu';




const DashboardSidebar = () => {

      const [role,isLoading,refetch] = useRole();

           if(isLoading){
             <Loading></Loading>
           }
    return (
      <div className="drawer-side w-full  primary_bg_color ">
      <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
     {role === 'customer' &&                 <Customer_Menu></Customer_Menu> }
     {/* {role === 'teacher' &&                <TeacherMenu></TeacherMenu> }
      {role === 'student' &&      <StudentMenu></StudentMenu> } */}
   
    </div>
    );
};

export default DashboardSidebar;




           