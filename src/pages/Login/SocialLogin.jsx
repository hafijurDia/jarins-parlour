import { FaFacebook, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <>
      {/* Social Login */}
      <div className="mt-4 space-y-3">
        <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          <FaFacebook /> Login with Facebook
        </button>
        <button className="w-full flex items-center justify-center gap-2 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600">
          <FaGoogle /> Login with Google
        </button>
      </div>

      {/* Register Link */}
      <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
        Dont have an account?
        <a href="/register" className="text-pink-500 hover:underline">
          Create an account
        </a>
      </p>
    </>
  );
};

SocialLogin.propTypes = {};

export default SocialLogin;
