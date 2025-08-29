// import { useEffect, useState } from "react";
// import { motion, useAnimation } from "framer-motion";

// const Counter = ({ target, duration, label }) => {
//   const [count, setCount] = useState(0);
//   const controls = useAnimation();

//   useEffect(() => {
//     controls.start({ count: target, transition: { duration, ease: "easeOut" } });
//   }, [controls, target, duration]);

//   useEffect(() => {
//     controls.set({ count: 0 });
//     controls.start({
//       count: target,
//       transition: { duration, ease: "easeOut" }
//     });
//   }, [controls, target, duration]);

//   return (
//     <motion.div
//       animate={controls}
//       initial={{ count: 0 }}
//       onUpdate={(latest) => setCount(Math.floor(latest.count))}
//       className="text-3xl font-extrabold text-[#115237]"
//     >
//       {count}+ <span className="text-base text-[10px] text-[#620000]">{label}</span>
//     </motion.div>
//   );
// };

// const CounterGrid = () => {
//   return (
//     <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center p-8 mx-20 bg-gray-100">
//       <Counter target={300} duration={2} label="Students" />
//       <Counter target={30} duration={2} label="Teachers" />
//       <Counter target={100} duration={2} label="Awards" />
//       <Counter target={12} duration={2} label="Years of Excellence" />
//     </div>
//   );
// };

// export default CounterGrid;
import { useEffect } from "react";
import {
  motion as Motion,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";

const Counter = ({ target, duration, label }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  useEffect(() => {
    const controls = animate(count, target, {
      duration,
      ease: "easeOut",
    });

    return controls.stop; // cleanup when unmounted
  }, [count, target, duration]);

  return (
    <Motion.div className="text-3xl font-extrabold text-[#115237]">
      <Motion.span>{rounded}</Motion.span>+{" "}
      <span className="text-sm text-[#620000]">{label}</span>
    </Motion.div>
  );
};

const CounterGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center p-8 mx-20 bg-gray-100 rounded-2xl shadow-md">
      <Counter target={300} duration={2} label="Students" />
      <Counter target={30} duration={2} label="Teachers" />
      <Counter target={100} duration={2} label="Awards" />
      <Counter target={12} duration={2} label="Years of Excellence" />
    </div>
  );
};

export default CounterGrid;
