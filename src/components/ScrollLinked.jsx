import React from "react";
import { motion, useSpring, useScroll } from "motion/react";

const ScrollLinked = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 7,
          originX: 0,
          backgroundColor: "#057de4",
        }}
      />
    </>
  );
};

export default ScrollLinked;
