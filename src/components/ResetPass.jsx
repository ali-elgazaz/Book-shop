import { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const ResetPass = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
    remember: false,
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    // Password Validation
    if (!formData.password) {
      setError("Password is required");

      setTimeout(() => {
        setError("");
      }, 3000);

      return;
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters");

      setTimeout(() => {
        setError("");
      }, 3000);

      return;
    }

    // Confirm Password
    if (!formData.confirmPassword) {
      setError("Confirm password is required");

      setTimeout(() => {
        setError("");
      }, 3000);

      return;
    }

    // Match Passwords
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");

      setTimeout(() => {
        setError("");
      }, 3000);

      return;
    }

    // Success
    setSuccess("Password reset successfully");

    // Navigate
    setTimeout(() => {
      navigate("/login");
    }, 3000);
  };
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-xl rounded-2xl shadow-lg p-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-lg font-semibold text-[#D9176C]">
            Create new password!
          </h1>

          <p className="text-[#22222280] text-sm mt-3">
            Create a strong password
          </p>

          <p className="text-[#22222280] text-sm">
            Your new password must be different from previous one
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Password */}
          <div>
            <label className="block mb-2 font-semibold text-lg text-[#222222]">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-4 outline-none focus:ring-2 focus:ring-pink-300 text-[#22222280]"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? (
                  <IoEyeOffOutline size={20} />
                ) : (
                  <IoEyeOutline size={20} />
                )}
              </button>
            </div>

            <p className="text-[#22222280] text-sm mt-2">
              Must be at least 8 characters
            </p>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-2 font-semibold text-lg text-[#222222]">
              Confirm password
            </label>

            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-4 outline-none focus:ring-2 focus:ring-pink-300 text-[#22222280]"
              />

              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-500"
              >
                {showConfirmPassword ? (
                  <IoEyeOffOutline size={20} />
                ) : (
                  <IoEyeOutline size={20} />
                )}
              </button>
            </div>
          </div>

          {/* Remember */}
          <label className="flex items-center gap-2 cursor-pointer text-gray-700">
            <input
              type="checkbox"
              name="remember"
              checked={formData.remember}
              onChange={handleChange}
            />
            Remember me
          </label>

          {/* Error */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Success */}
          {success && <p className="text-green-600 text-sm">{success}</p>}

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 transition-all text-white font-semibold py-4 rounded-xl text-lg"
          >
            Reset password
          </button>
        </form>
      </div>
    </section>
  );
};

export default ResetPass;
