import { useEffect, useState } from "react";

const Sale = () => {
  const [time, setTime] = useState(1800);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = String(Math.floor(time / 60)).padStart(2, "0");

  const seconds = String(time % 60).padStart(2, "0");

  const progress = (time / 1800) * 100;
  return (
    <section className="border-t border-[#22222233]">
      <div className="head container-custom flex items-center justify-between">
        <div className="head-info  ">
          <h2 className="text-[#222222] text-[26px] font-bold">Flash Sale</h2>
          <p className="text-[16px] text-[#22222280]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            <br />
            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
            leo.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative w-55 h-55">
            {/* circle */}
            <svg className="w-full h-full -rotate-90">
              {/* background */}
              <circle
                cx="110"
                cy="110"
                r="100"
                stroke="#ddd"
                strokeWidth="8"
                fill="none"
              />

              {/* progress */}
              <circle
                cx="110"
                cy="110"
                r="100"
                stroke="#e91e63"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={2 * Math.PI * 100}
                strokeDashoffset={
                  2 * Math.PI * 100 - (progress / 100) * (2 * Math.PI * 100)
                }
              />
            </svg>

            {/* dot */}
            <div
              className="absolute w-5 h-5 bg-pink-600 rounded-full"
              style={{
                top: `calc(50% + ${
                  100 * Math.sin((2 * Math.PI * progress) / 100)
                }px - 10px)`,

                left: `calc(50% + ${
                  100 * Math.cos((2 * Math.PI * progress) / 100)
                }px - 10px)`,
              }}
            ></div>

            {/* text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-5xl font-bold text-gray-800">
                {minutes}:{seconds}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="d"></div>
    </section>
  );
};

export default Sale;
