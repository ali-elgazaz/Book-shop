import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgetPas = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validation
    if (!email) {
      setError("Email is required");
      return;
    }

    if (!emailRegex.test(email)) {
      setError("Invalid email");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }

    // Success
    setSuccess("Reset code sent successfully");
    setTimeout(() => {
      navigate("/reset-password");
    }, 2000);
  };
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl shadow-lg p-8 text-[#222222]">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-lg font-bold text-pink-600">Forget Password?</h1>

          <p className=" mt-2 text-sm text-[#22222280]">
            Enter your email to reset your password
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block mb-2 text-lg font-semibold">Email</label>

            <input
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full border rounded-lg px-4 py-3 outline-none transition-all
              ${
                error
                  ? "border-red-500 focus:ring-2 focus:ring-red-300"
                  : "border-gray-300 focus:ring-2 focus:ring-pink-300"
              }`}
            />

            {/* Error */}
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

            {/* Success */}
            {success && (
              <p className="text-green-600 text-sm mt-1">{success}</p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 transition-all text-white font-semibold py-3 rounded-lg"
          >
            Send reset code
          </button>
        </form>
      </div>
    </section>
  );
};

export default ForgetPas;
