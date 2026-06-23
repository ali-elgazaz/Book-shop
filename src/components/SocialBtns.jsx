import { IoLogoGoogle, IoLogoFacebook } from "react-icons/io5";
const SocialBtns = () => {
  return (
    <div className="space-y-4 text-[#222] text-[14px]">
      <button className="w-full border border-gray-300 rounded-lg py-3 flex items-center justify-center gap-3 hover:bg-gray-100 transition-all">
        <IoLogoGoogle size={22} className="text-red-500" />
        Login with Google
      </button>

      <button className="w-full border border-gray-300 rounded-lg py-3 flex items-center justify-center gap-3 hover:bg-gray-100 transition-all">
        <IoLogoFacebook size={22} className="text-blue-600" />
        Login with Facebook
      </button>
    </div>
  );
};

export default SocialBtns;
