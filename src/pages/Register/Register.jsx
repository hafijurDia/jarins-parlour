import { useForm } from "react-hook-form";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import logo from "../../assets/logo/logo.png";
import UseAuth from "../../hooks/UseAuth";
import SocialLogin from "../Login/SocialLogin";

const Register = () => {
  const { createUser, loading } = UseAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    createUser(data.email, data.password)
      .then((res) => {
        console.log("User created:", res.user);
      })
      .catch((error) => {
        console.error("Error creating user:", error.message);
      });
  };

  if (loading) {
    return <div>Loading...</div>; // Show a loading spinner or message
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        {/* Company Logo */}
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Company Logo" className="w-20" />
        </div>

        {/* Register Title */}
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Create an Account
        </h2>

        {/* Register Form */}
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="First Name"
              {...register("firstName", { required: "First Name is required" })}
              className="w-1/2 p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName.message}</p>
            )}
            <input
              type="text"
              placeholder="Last Name"
              {...register("lastName", { required: "Last Name is required" })}
              className="w-1/2 p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName.message}</p>
            )}
          </div>
          <input
            type="email"
            placeholder="Username or Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
          <input
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">
              {errors.confirmPassword.message}
            </p>
          )}
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="mx-3 text-gray-500 dark:text-gray-400">OR</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        {/* Social Login */}
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Register;