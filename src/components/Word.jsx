/* eslint-disable react/prop-types */
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Word = ({ value }) => {
  const element = useRef(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"], // Adjust the offset to control when it animates
  });

  const words = value.split(" ");

  return (
    <p
      ref={element}
      className="text-[20px] text-white p-6 max-w-xl"
      style={{
        whiteSpace: "pre-line",
        fontFamily: "Manrope",
        fontWeight: 450,
      }}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;

        return (
          <ActualWord
            key={i}
            range={[start, end]}
            progress={scrollYProgress}
          >
            {word}
          </ActualWord>
        );
      })}
    </p>
  );
};

const ActualWord = ({ children, range, progress }) => {
  // Map progress to opacity (0.3 when out of view, 1 when fully in view)
  const opacity = useTransform(progress, range, [0.3, 1]);

  return (
    <span className="!relative mt-[12px] mr-[12px]">
      <span className="!absolute !h-full !w-full !opacity-[0.3]" />
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};

export default Word;
