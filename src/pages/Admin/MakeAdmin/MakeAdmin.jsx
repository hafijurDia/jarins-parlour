
import { useForm } from "react-hook-form";
import UseSecureAxios from "../../../hooks/UseSecureAxios";
import Swal from "sweetalert2";

const MakeAdmin = () => {
    const axiosSecure = UseSecureAxios();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const email = data.email;
    console.log(email);
    try {
        const res = await axiosSecure.get(`/users/email/${email}`);
        if (!res.data || res.data.length === 0) {
            alert('user not fount');
          }
          const userId = res.data._id; // Get user ID from response
          console.log(userId);
           // Step 2: Update the user's role to "admin"
      const updateRes = await axiosSecure.patch(`/users/${userId}`, {
        role: "admin",
      });
      if (updateRes.data.modifiedCount > 0) {
        Swal.fire({
          title: "Success!",
          text: "User has been made an Admin.",
          icon: "success",
        });
        reset(); // Clear the form after success
      }
        
    } catch (error) {
        console.log(error)
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Make an Admin</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Email Input */}
        <div>
          <label className="block font-medium">Email:</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter user email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Make Admin
        </button>
      </form>
    </div>
  );
};

export default MakeAdmin;

