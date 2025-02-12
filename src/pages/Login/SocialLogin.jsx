import { FaFacebook, FaGoogle } from "react-icons/fa";
import UseAuth from "../../hooks/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";
import UsePublicAxios from "../../hooks/UsePublicAxios";

const SocialLogin = () => {
  const { googleSignIn } = UseAuth();
  const navigate = useNavigate();
  const location = useLocation(); 
  const from = location.state?.from?.pathname || "/"; 
  const axiosPublic = UsePublicAxios();

  const handleGoogleSign = () => {
    googleSignIn()
      .then((result) => {
        console.log("Google Sign-In Successful:", result.user);
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
        }
        axiosPublic.post("/users", userInfo)
        .then(result=>{
          console.log(result.data);
          navigate(from, { replace: true }); 
        })
        
      })
      .catch((error) => {
        console.error("Google Sign-In Error:", error.message);
      });
  };

  return (
    <>
      {/* Social Login */}
      <div className="mt-4 space-y-3">
        <button
          onClick={handleGoogleSign}
          className="w-full flex items-center justify-center gap-2 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
        >
          <FaGoogle /> Login with Google
        </button>
        <button
          className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          <FaFacebook /> Login with Facebook
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
