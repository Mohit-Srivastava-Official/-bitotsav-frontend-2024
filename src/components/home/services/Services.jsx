import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import CountUp from "react-countup";
import "./Services.css";
import "./services.scss";
import "../../../styles/Background.css";
import { HiPlusSm } from "react-icons/hi";

const variants = {
  initial: {
    x: 0,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  const [counting, setCounting] = useState(false);

  const handleCountingStart = () => {
    setCounting(true);
  };

  return (
    <motion.div
      className="services h-screen dotted-bg"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView ? "animate" : "initial"}
    >
      <motion.div
        className="listContainer lg:items-center gap-6 font-blender-heavy text-2xl align-middle"
        variants={variants}
      >
        <motion.div
          className="box-s box-cc"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <CountUp
            start={0}
            end={10000}
            duration={2}
            redraw={true}
            useEasing={true}
            suffix="+"
            onStart={() => handleCountingStart()}
          >
            {({ countUpRef }) => (
              <h1 ref={countUpRef} className="heading">
                {counting ? null : 0}
              </h1>
            )}
          </CountUp>
          <h2 className="subheading">FOOTFALL</h2>
        </motion.div>

        <motion.div
          className="box-s box-cc"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <CountUp
            start={0}
            end={5000}
            duration={2}
            redraw={true}
            useEasing={true}
            suffix="+"
            onStart={() => handleCountingStart()}
          >
            {({ countUpRef }) => (
              <h1 ref={countUpRef} className="heading">
                {counting ? null : 0}
              </h1>
            )}
          </CountUp>
          <h2 className="subheading">REGISTRATIONS</h2>
        </motion.div>

        <motion.div
          className="box-s box-cc"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <CountUp
            start={0}
            end={60000}
            duration={2}
            redraw={true}
            useEasing={true}
            suffix="+"
            onStart={() => handleCountingStart()}
          >
            {({ countUpRef }) => (
              <h1 ref={countUpRef} className="heading">
                {counting ? null : 0}
              </h1>
            )}
          </CountUp>
          <h2 className="subheading">SOCIAL MEDIA VIEWS</h2>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
