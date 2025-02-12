import { useQuery } from "@tanstack/react-query";
import UseSecureAxios from "../../../hooks/UseSecureAxios";
import Swal from "sweetalert2";

const AllUser = () => {
  const axiosSecure = UseSecureAxios();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users"); // ✅ Await added
      return res.data;
    },
  });

  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`) // ✅ Fixed URL
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch(); // ✅ Called correctly
              Swal.fire({
                title: "Deleted!",
                text: "The user has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((error) => {
            console.error("Delete Error:", error);
            Swal.fire({
              title: "Error!",
              text: "Something went wrong.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <>
      <div className="flex justify-evenly">
        <h2>All Users</h2>
        <h2>Total Users: {users.length}</h2>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* Table Head */}
            <thead>
              <tr>
                <th>SL</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                  {user.role ? user.role : "Normal User"}
                  </td>
                  <td>
                    <button
                      className="btn bg-pink-200"
                      onClick={() => handleDeleteUser(user)} // ✅ Fixed onClick
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllUser;
