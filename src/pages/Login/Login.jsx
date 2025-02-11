import { useForm } from "react-hook-form";
import logo from "../../assets/logo/logo.png";
import SocialLogin from "./SocialLogin";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect, useState } from "react";
import UseAuth from "../../hooks/UseAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { signInUser } = UseAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [disabled, setDisabled] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";
  console.log(location.state);

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    signInUser(email, password).then((res) => {
      console.log(res);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User login successfull",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, {replace:true})
    });

    // Handle login logic here
  };

  const handleValidCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value) == true) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        {/* Company Logo */}
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Company Logo" className="w-20" />
        </div>

        {/* Login Title */}
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Login
        </h2>

        {/* Login Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
          {/* react simple recapture */}
          <div className="space-y-2">
            <LoadCanvasTemplate />
            <input
              type="text"
              name="captcha"
              id="captcha"
              onBlur={handleValidCaptcha}
              placeholder="Type captcha here"
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <input
            disabled={disabled}
            type="submit"
            value="Login"
            className="w-full btn bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600"
          />
        </form>
        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="mx-3 text-gray-500 dark:text-gray-400">OR</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>
        <SocialLogin />
      </div>
    </div>
  );
};

export default Login;
