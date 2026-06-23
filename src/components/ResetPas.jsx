import { useRef, useState } from "react";

const ResetPas = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [error, setError] = useState("");

  const inputsRef = useRef([]);

  const handleChange = (value, index) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;

    setOtp(newOtp);

    if (value && index < 3) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const code = otp.join("");

    if (code.length < 4) {
      setError("Please enter the 4-digit code");

      setTimeout(() => {
        setError("");
      }, 3000);

      return;
    }
  };
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md  rounded-2xl shadow-lg p-8 text-center">
        <h1 className="text-lg font-bold text-pink-600">Reset your password</h1>

        <p className="text-[#22222280] text-sm mt-3">
          Enter the 4 digits code that you received on your email
        </p>

        <form onSubmit={handleSubmit} className="mt-8">
          <div className="flex items-center justify-center gap-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={digit}
                ref={(el) => (inputsRef.current[index] = el)}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-14 h-14 border border-gray-300 rounded-xl text-center text-xl text-[#222222] font-semibold outline-none focus:ring-2 focus:ring-pink-300"
              />
            ))}
          </div>

          {error && <p className="text-red-500 text-sm mt-4">{error}</p>}

          <button
            type="submit"
            className="w-full mt-8 bg-pink-600 hover:bg-pink-700 transition-all text-white font-semibold py-3 rounded-lg"
          >
            Reset password
          </button>
        </form>

        <p className="text-gray-600 text-sm mt-6">
          Didn’t receive a code?{" "}
          <button className="text-pink-600 font-medium hover:underline">
            Send again
          </button>
        </p>
      </div>
    </section>
  );
};

export default ResetPas;
