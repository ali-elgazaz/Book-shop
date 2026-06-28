// import { IoMicOutline, IoSearchOutline } from "react-icons/io5";
// import hero from "../assets/hero.png";
// import { motion } from "framer-motion";

// const Hero = ({ height = "100vh" }) => {
//   const isSmall = height !== "h-screen";

//   return (
//     <section className="relative transition delay-150 duration-300 ease-in">
//       <motion.img
//         src={hero}
//         alt="hero img"
//         className={`w-screen object-cover transition delay-150 duration-300 ease-linear`}
//         animate={{
//           height: height === "h-screen" ? "100vh" : "330px",
//         }}
//         transition={{
//           duration: 0.7,
//           ease: "easeInOut",
//         }}
//       />

//       {!isSmall && (
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="join w-132.5">
//             <label className="input bg-white rounded-l-full flex-1 focus:border-0">
//               <input
//                 type="search"
//                 id="search"
//                 placeholder="search"
//                 className="bg-white text-[rgba(34,34,34,0.5)] text-xl"
//               />
//               <IoMicOutline className="text-[rgba(34,34,34,0.5)] text-xl" />
//             </label>

//             <button className="btn bg-secondary border-0 text-xl rounded-r-full">
//               <IoSearchOutline />
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Hero;

import { IoMicOutline, IoSearchOutline } from "react-icons/io5";
import hero from "../assets/hero.png";
import { motion } from "framer-motion";

const Hero = ({ size = "large" }) => {
  const heightMap = {
    large: "100vh",
    medium: "330px",
    small: "120px",
  };

  const animatedHeight = heightMap[size] || "100vh";
  const isLarge = size === "large";

  return (
    <section className="relative transition delay-150 duration-300 ease-in">
      <motion.img
        src={hero}
        alt="hero img"
        className="w-screen object-cover"
        animate={{ height: animatedHeight }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      />

      {isLarge && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="join w-132.5">
            <label className="input bg-white rounded-l-full flex-1 focus:border-0">
              <input
                type="search"
                id="search"
                placeholder="search"
                className="bg-white text-[rgba(34,34,34,0.5)] text-xl"
              />
              <IoMicOutline className="text-[rgba(34,34,34,0.5)] text-xl" />
            </label>

            <button className="btn bg-secondary border-0 text-xl rounded-r-full">
              <IoSearchOutline />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
