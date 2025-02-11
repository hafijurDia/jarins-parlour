import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Admin/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <>
      <div className="bg-gray-200 min-h-screen flex">
        {/* Sidebar */}
        <div className="md:sticky md:top-0 h-screen">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="px-10 py-5">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
