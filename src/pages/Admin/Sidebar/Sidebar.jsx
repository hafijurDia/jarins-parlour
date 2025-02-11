import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { CiViewList } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineRateReview } from "react-icons/md";
import { PiSquaresFourThin } from "react-icons/pi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const admin = true;
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        {admin ? (
          <>
            <div className="min-h-full bg-pink-200 w-80 p-">
              <ul className="menu text-base-content 4">
                {/* Sidebar content here */}
                <li>
                  <Link to="/order-list">
                    <CiViewList /> Order List
                  </Link>
                </li>
                <li>
                  <Link to="/add-service">
                    <IoMdAdd /> Add Service
                  </Link>
                </li>
                <li>
                  <Link to="/make-admin">
                    <AiOutlineUsergroupAdd /> Make Admin
                  </Link>
                </li>
                <li>
                  <Link to="/manage-service">
                    <PiSquaresFourThin /> Manage Service
                  </Link>
                </li>
              </ul>
              <div className="flex items-center my-4">
                <div className="flex-1 border-t border-gray-300"></div>
                <span className="mx-3 text-gray-500 dark:text-gray-400">
                  OR
                </span>
                <div className="flex-1 border-t border-gray-300"></div>
              </div>
              <ul className="menu text-base-content 4">
              {/* Sidebar content here */}
              <li>
                <Link to="/">
                  <CiViewList />
                  Home
                </Link>
              </li>
            </ul>
            </div>
            
          </>
        ) : (
          <>
            <div className="min-h-full w-80 p-4">
              <ul className="menu bg-base-200 text-base-content">
                {/* Sidebar content here */}
                <li>
                  <Link to="/book">
                    <FiShoppingCart /> Book
                  </Link>
                </li>
                <li>
                  <Link to="/booking-list">
                    <CiViewList /> Booking List
                  </Link>
                </li>
                <li>
                  <Link to="/review">
                    <MdOutlineRateReview /> Review
                  </Link>
                </li>
              </ul>
              <div className="flex items-center my-4">
                <div className="flex-1 border-t border-gray-300"></div>
                <span className="mx-3 text-gray-500 dark:text-gray-400">
                  OR
                </span>
                <div className="flex-1 border-t border-gray-300"></div>
              </div>
              <ul className="menu text-base-content 4">
              {/* Sidebar content here */}
              <li>
                <Link to="/">
                  <CiViewList />
                  Home
                </Link>
              </li>
            </ul>

            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
